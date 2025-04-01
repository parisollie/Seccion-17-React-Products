import { PropTypes } from "prop-types";

//Paso 1.13,creamos el componente ProductDetail
//V-236,paso 2.8 ponemos el hanlderRemove
export const ProductDetail = (
    {
        //Paso 2.24
        handlerProductSelected,
        //Paso 2.14
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
                {/**Paso 2.26 */}
                <button className="btn btn-secondary btn-sm" onClick={() => handlerProductSelected(product)}>
                    update
                </button>
            </td>
            <td>
                {/**Paso 2.15 ,le pasamos el handle remove*/}
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
    //Paso 2.17
    handlerRemove: PropTypes.func.isRequired,
    //Paso 2.25
    handlerProductSelected: PropTypes.func.isRequired
}