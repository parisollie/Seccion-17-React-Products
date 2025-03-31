import { useEffect, useState } from "react"

//Objeto formulario
const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}
//Vid 234, le pasamos los hanlder
export const ProductForm = ({ productSelected, handlerAdd }) => {

    //Nuestro use state ,la funcion set y palabra del formulario
    const [form, setForm] = useState(initialDataForm);

    //desestrcuturamos 
    const { id, name, description, price } = form;

    //Vid 237, plantilla de eventos, cuando cambia algo.Le pasamos el producto seleccionado.
    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);//se gatilla cuando cambia el product selected

    return (
        <form onSubmit={(event) => {
            //Vid 235,Prevente default, se queda en la pagina y no hace un refresh.
            //y de esta manera no se pierden los datos al enviar los datos.
            event.preventDefault();

            //Validamos
            if (!name || !description || !price) {
                alert('Debe de completar los datos del formulario!')
                return;
            }
            //Vid 235, ponemos el handlder console.log(form);
            handlerAdd(form);
            //Limpiamos el formulario, con los datos por defecto.
            setForm(initialDataForm);
        }}>
            <div>
                <input
                    placeholder="Name"
                    className="form-control my-3 w-75"
                    name="name"
                    //Vid 234 ,El valor que tendra el evento
                    value={name}
                    //Cada que cambia tenemos un callback
                    onChange={(event) => setForm({
                        //guardamos una copia y solo modificamos el nombre 
                        ...form,
                        name: event.target.value
                    })}
                />
            </div>
            <div>
                <input
                    placeholder="Description"
                    className="form-control my-3 w-75"
                    name="description"
                    value={description}
                    onChange={(event) => setForm({
                        ...form,
                        description: event.target.value
                    })}
                />
            </div>
            <div>
                <input
                    placeholder="Price"
                    className="form-control my-3 w-75"
                    name="price"
                    value={price}
                    onChange={(event) => setForm({
                        ...form,
                        price: event.target.value
                    })}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">

                    {id > 0 ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    )
}