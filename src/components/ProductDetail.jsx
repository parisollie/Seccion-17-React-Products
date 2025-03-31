import { PropTypes } from "prop-types";

//Vid 232 
//Vid 236 ponemos el hanlderRemove
export const ProductDetail = ({ handlerProductSelected, handlerRemove, product = {} }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-secondary btn-sm" onClick={() => handlerProductSelected(product)}>
                    update
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(product.id)}>
                    remove
                </button>
            </td>
        </tr>
    )
}
//Vid 233, agregamos los propTypes
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}