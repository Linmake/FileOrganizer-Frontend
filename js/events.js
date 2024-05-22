const btnAviso = document.getElementById("btn-aviso")
const btnCloseAviso =  document.getElementById("btn-okay")
const capa = document.getElementById("capa-principal")
const article1 = document.getElementById("article-1")
const article2 = document.getElementById("article-2")

const paginaIdea = () => {
  window.open("../html/page.html")
}

const paginaProyecto = () => {
  window.open("../html/proyect.html")
}

const desplegar = () => {
  capa.classList.remove("hidden")
  capa.classList.add("visible")
}

const cerrarDespliegue = () => {
  capa.classList.remove("visible")
  capa.classList.add("hidden")
}

article1.addEventListener("click", paginaProyecto)
article2.addEventListener("click", paginaIdea)
btnAviso.addEventListener("click", desplegar)
btnCloseAviso.addEventListener("click", cerrarDespliegue)