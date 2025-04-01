import axios from "axios";

//Paso 1.3
const initProducts = [
    {
        //paso 3.5, le asigna el id
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es increible!'
    },
    {
        id: 2,
        name: 'IPhone 14',
        price: 800,
        description: 'El telefono es muy bueno!'
    }
];

//Paso 4.1, nuestra ruta con react de los productos
const baseUrl = 'http://localhost:8080/products';

//paso 1.8
export const listProduct = () => {
    return initProducts;
}

//V-245,paso 4.0(aqui empieza la conexion con backend) el asyn siempre va acompañado del await
export const findAll = async () => {
    try {
        /*definimos una constante respuesta (get,post,put es lo que tiene axios)
        las peticiones devuelven una promesa, que puede cumplir o no.*/
        const response = await axios.get(baseUrl);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

//El paso 4.4, esta en el backend
//V-246 ,paso 4.5 deestructuramos el objeto producto.
export const create = async ({ name, description, price }) => {
    try {
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
//Paso 4.6
export const update = async ({ id, name, description, price }) => {
    try {
        //le concatenamos el id 
        const response = await axios.put(`${baseUrl}/${id}`, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
//V-247,paso 4.11
export const remove = async (id) => {

    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}