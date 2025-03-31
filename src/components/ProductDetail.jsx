import { PropTypes } from "prop-types";

//Paso 1.13,creamos el componente ProductDetail
//Vid 236 ponemos el hanlderRemove
export const ProductDetail = (
    {
        handlerProductSelected,
        handlerRemove,
        //paso 1.15, le pasamos el prop
        product = {}
    }) => {

    return (
        <tr>
            {/** Paso 1.14 */}
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
//Paso 1.18, agregamos los propTypes
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    //
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}