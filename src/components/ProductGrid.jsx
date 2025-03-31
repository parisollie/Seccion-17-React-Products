import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"

/* 
   V-232 ,Paso 1.10. creamos el componente Product Grid
  
*/
export const ProductGrid = (
    {
        //Paso 1.11, le pasamos los props
        handlerProductSelected,
        handlerRemove,
        products = []
    }) => {


    return (
        //Paso 1.4,ponemos una tabla con los productos
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    {/** th son los encabezados */}
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {/** paso 1.5,Obtenemos cada elemento con el map y modificamos los elementos */}
                {products.map(product => {
                    //Vid 236, ponemos handlerRemove
                    return <ProductDetail
                        handlerProductSelected={handlerProductSelected}
                        handlerRemove={handlerRemove}
                        //Paso 1.16, le ponemos el product y el key
                        product={product}
                        key={product.name}
                    />
                })}
            </tbody>
        </table>

    )
}
//V-233,paso 1.17 agregamos los propTypes, instalamos dependencia
ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    //Vid 236
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}