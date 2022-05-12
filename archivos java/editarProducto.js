
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
      respuesta.json()
    );
  };
  
  
const obtenerInfo = () =>{
const url = new URL(window.location);
const id = url.searchParams.get("id");
detalleProducto(id);
}

obtenerInfo();

