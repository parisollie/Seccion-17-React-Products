import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"

/* 
   V-232 ,Paso 1.10. creamos el componente Product Grid
  
*/
export const ProductGrid = (
    {
        //Paso 2.20
        handlerProductSelected,
        //Paso 2.11
        handlerRemove,
        //Paso 1.11, le pasamos los props
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
                    {/**Paso 2.21 */}
                    <th>update</th>
                    {/**Paso 2.16 */}
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {/** paso 1.5,Obtenemos cada elemento con el map y modificamos los elementos */}
                {products.map(product => {

                    return <ProductDetail
                        //Paso 2.22
                        handlerProductSelected={handlerProductSelected}
                        //paso 2.12
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
    //Paso 2.13
    handlerRemove: PropTypes.func.isRequired,
    //Paso 2.23
    handlerProductSelected: PropTypes.func.isRequired
}