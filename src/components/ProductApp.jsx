import { useEffect, useState } from "react";
import { create, findAll, remove, update } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from 'prop-types';
import { ProductForm } from "./ProductForm";

//Paso 1.18 , ponemos el title 
//V-230,paso 1.0 creamos el componente Products App
export const ProductApp = ({ title }) => {

    /*
      Paso 1.2 ,ponemos nuestro Hoks, es una constante products y algunas funcion set que cambie
      el estado de los productos,y el useState para menejar el estado de react y valores iniciales []
    */
    const [products, setProducts] = useState([]);

    //V-237,Paso 2.18 colocamos los datos iniciales.
    const [productSelected, setProductSelected] = useState({
        //Paso 3.2,ponemos el id
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    //Paso 4.2 creamos una función intermedia
    const getProducts = async () => {
        const result = await findAll();
        // console.log(result);
        setProducts(result.data._embedded.products);
    }

    //V-231,paso 1.6,ponemos el useEffect
    useEffect(() => {
        /*
          paso 1.9, le mandamos la función con los productos.
          const result = listProduct();
          setProducts(result);
          
          Paso 4.3, ponemos el get products para poder comunicar con el backend.
        */
        getProducts();
    }, []);//[],paso 1.7 se ejecuta una sola vez, en cada actualizacion 




    //Paso 2.4, creamos el handlerAddProduct 
    //Paso 4.8, le ponems el asyng
    const handlerAddProduct = async (product) => {
        console.log(product);
        //Paso 3.6, si el producto es mayor a 0
        if (product.id > 0) {

            //Paso 4.7, pasamos el producro que se va por argumento
            const response = await update(product);

            //V-238,paso 3.0
            setProducts(products.map(prod => {
                /*
                Si existe el producto al producto que pasamos por argumento
                 if (prod.id == product.id) {
                     //devolvemos el objeto cambiado.
                     return { ...product }
                 }*/
                //Paso 4.9, le pasamos los datos de la base de datos
                if (prod.id == response.data.id) {
                    //Regresamos las respuesta del producto.
                    return { ...response.data }
                }
                //Retornamos el actual ,sino hay cambios.
                return prod;
            }));
        } else {
            /*
            Paso 2.5 ,Mantenemos los ...productos y obtenemos un nuevo producto.
            y ponemos el nuevo producto y le agregamos un nuevo id
            setProducts([...products, { ...product, id: new Date().getTime() }]);
            Paso 3.1
            Paso 4.10, le pasamos el create product para ponerlo en la se de datos.
            */
            const response = await create(product);
            //ya viene el id en la base de datos ,solo lo guardamos.
            setProducts([...products, { ...response.data }]);
        }
    }
    //Paso 2.9 handler para eliminar el producto, y pasamos el id a eliminar
    const handlerRemoveProduct = (id) => {
        //Paso 4.12, removemos el id a eliminar
        remove(id);
        /*
         console.log(id);
         recibimos el arreglo original y le quitamos el original con filter.
         Paso 3.4, le damos el id product.id != id, a un producto.
         setProducts(products.filter(product => product.id != id));
        */
        setProducts(products.filter(product => product.id != id));
    }

    //Paso 2.19
    const handlerProductSelected = (product) => {
        //Recibe el nuevo producto.
        setProductSelected({ ...product });
    }

    return (
        <div className="container my-4">
            {/** Paso 1.19,ponemos el title */}
            <h2>{title}</h2>
            {/*
              *Paso 1.34, ponemos el div 
             * V-239,Paso 3.7, le ponemos clases del bootstrap
            */}
            <div className="row">

                {/**Paso 1.35, ponemos el div */}
                <div className="col">
                    {/**Paso 1.33, ponemos el ProductForm */}
                    <ProductForm
                        //Paso 2.6,le pasamos la funcion.
                        handlerAdd={handlerAddProduct}
                        //Paso 2.27
                        productSelected={productSelected}
                    />
                </div>

                {/**Paso 1.36, ponemos el div */}
                <div className="col">
                    {
                        //Paso 1.12,ponemos <ProductGrid products={products} 
                        //V-239,Paso 3.7, si el producto es mayor a 0
                        products.length > 0 ?
                            <ProductGrid
                                products={products}
                                //Paso 2.10
                                handlerRemove={handlerRemoveProduct}
                                //Paso 2.20
                                handlerProductSelected={handlerProductSelected}
                            />
                            : <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }

                </div>
            </div>
        </div>
    )
}
//Paso 1.21, agregamos los propTypes
ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}