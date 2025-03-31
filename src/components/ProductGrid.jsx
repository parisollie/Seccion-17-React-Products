import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"

//Vid 232 ,le ponemoslos props
export const ProductGrid = ({ handlerProductSelected, handlerRemove, products = [] }) => {

    //Vid 230
    return (

        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>

                {products.map(product => {
                    //Obtenemos cada elemento con el map y modificamos los elementos
                    //Vid 236, ponemos handlerRemove
                    return <ProductDetail handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemove} product={product} key={product.name} />
                })}
            </tbody>
        </table>

    )
}
//Vid 233, agregamos los propTypes
ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    //Vid 236
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}