import { useEffect, useState } from "react";
import { create, findAll, remove, update } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from 'prop-types';
import { ProductForm } from "./ProductForm";

//Vid 233 , ponemos el title 
//V-230,paso 1.0 creamos el componente Products App
export const ProductApp = ({ title }) => {

    /*
      Paso 1.2 ,ponemos nuestro Hoks, es una constante products y algunas funcion set que cambie
      el estado de los productos,y el useState para menejar el estado de react y valores iniciales []
    */
    const [products, setProducts] = useState([]);

    //vid 237 ,colocamos los datos iniciales.
    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    //Vid 245,creamos una funcion intermedia
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
          Vid 245
        */
        getProducts();
    }, []);//[],paso 1.7 se ejecuta una sola vez, en cada actualizacion 




    //Vid 235, creamos el hanlder 
    const handlerAddProduct = async (product) => {
        console.log(product);

        if (product.id > 0) {

            //Vid 246, pasamos el producro que se va por argumetno
            const response = await update(product);

            //Vid 238
            setProducts(products.map(prod => {
                //Si existe el producto al producto que pasamos por argumento
                // if (prod.id == product.id) {
                //     //devolvemos el objeto cambiado.
                //     return { ...product }
                // }
                if (prod.id == response.data.id) {
                    //Regresamos las respuesta del producto.
                    return { ...response.data }
                }
                //Retornamos el actual ,sino hay cambios.
                return prod;
            }));
        } else {
            //Vid 235,Mantenemos los ...productos y obtenemos un nuevo producto.
            //y ponemos el nuevo producto y le agregamos un nuevo id
            //setProducts([...products, { ...product, id: new Date().getTime() }]);

            const response = await create(product);
            //ya viene el id en la base de datos ,solo lo guardamos.
            setProducts([...products, { ...response.data }]);
        }
    }
    //Vis 233, handler para eliminar el producto, y pasamos el id a eliminar
    const handlerRemoveProduct = (id) => {
        // console.log(id);
        //recibimos el arreglo original y le quitamos el original con filter.
        //Vid 238, le damos el id product.id != id, a un producto.
        //setProducts(products.filter(product => product.id != id));
        //Vid 247, removemos el id a eliinar.
        remove(id);
        setProducts(products.filter(product => product.id != id));
    }

    //Vid 237
    const handlerProductSelected = (product) => {
        //Recibe el nuevo producto.
        setProductSelected({ ...product });
    }

    return (
        <div className="container my-4">
            <h2>{title}</h2>
            <div className="row">
                <div className="col">
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
                <div className="col">
                    {
                        products.length > 0 ? <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
                            : <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }

                </div>
            </div>
        </div>
    )
}
//Vid 233, agregamos los propTypes
ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}