import { useEffect, useState } from "react"

//Paso 1.26,Objeto formulario
const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}
//V-234,paso 1.22,creamos el componente ProductForm, le pasamos los hanlder
export const ProductForm = (
    {
        productSelected,
        //Paso 2.7, le pasamos el prop
        handlerAdd
    }) => {

    /*
      Paso 1.25 Nuestro use state ,la funcion set y palabra del formulario
      Paso 1.27, pasamos los datos iniciales en el useState(initialDataForm)
      */
    const [form, setForm] = useState(initialDataForm);

    //Paso 1.28,desestructuramos
    const { id, name, description, price } = form;

    //Vid 237, plantilla de eventos, cuando cambia algo.Le pasamos el producto seleccionado.
    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);//se gatilla cuando cambia el product selected

    return (
        /*
          Paso 1.23, creamos el form
          V-235,Paso 2.0,ponemos el onSubmit
        */
        <form onSubmit={(event) => {
            /*
              Paso 2.1,Prevente default, se queda en la pagina y no hace un refresh.
              y de esta manera no se pierden los datos al enviar los datos.
            */
            event.preventDefault();

            //Paso 2.2,Validamos
            if (!name || !description || !price) {
                alert('Debe de completar los datos del formulario!')
                return;
            }
            //paso 2.8, ponemos el handlder 
            // console.log(form);
            handlerAdd(form);
            //Paso 2.3,Limpiamos el formulario, con los datos por defecto.
            setForm(initialDataForm);
        }}>
            {/**Paso 1.37,ponemos el div */}
            <div>
                {/**Paso 1.24 creamos un input */}
                <input
                    placeholder="Name"
                    className="form-control my-3 w-75"
                    name="name"
                    //Paso 1.29 ,El valor que tendra el evento
                    value={name}
                    //Paso 1.30,Cada vez que cambia tenemos un callback
                    onChange={(event) => setForm({
                        //paso 1.31,guardamos una copia y solo modificamos el nombre. 
                        ...form,
                        name: event.target.value
                    })}
                />
            </div>

            {/**Paso 1.38,ponemos el div */}
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
                {/**Paso 1.32,creamos el botón */}
                <button type="submit" className="btn btn-primary">

                    {id > 0 ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    )
}