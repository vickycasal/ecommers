const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};


const crearNuevaLinea =(nombre, precio, id) => {
  const linea = document.createElement('tr')
  const contenido = `
      <td class="td" data-td>
      ${nombre}
    </td>
    <td>${precio}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href ="../form-productoNuevo.html?${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}" >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido;
    const boton = linea.querySelector('button')
    boton.addEventListener("click", () =>{
      const id = boton.id;
      eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta)
      })
    })
    return linea;
}

const table= document.querySelector("[data-table]")

const listaProducto = () => fetch("http://localhost:3000/perfil").then((respuesta) =>respuesta.json());



listaProducto().then((data) => {
  data.forEach(({nombre, precio, id}) => {
  const nuevaLinea = crearNuevaLinea(nombre, precio, id)
  table.appendChild(nuevaLinea)
});
})
.catch ((error) => alert ('ocirrio un error'))



  
    