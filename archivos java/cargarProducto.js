const form = document.querySelector("#agregarProducto");

const crearProducto = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
  };
  


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    console.log(nombre,precio)
    crearProducto(nombre, precio)
    .then ((respuesta) =>{
       window.location.href ="../productos.html"
    })
    .catch((error) => console.log(error))
});

