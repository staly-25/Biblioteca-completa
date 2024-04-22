const formulario = document.querySelector("#formulario")

const titulo = document.querySelector("#titulo")
const autor = document.querySelector("#autor")
const ano = document.querySelector("#ano")
const genero = document.querySelector("#genero")


const cartoes = document.querySelector("#cartoes")



function montarCard(livro){

    const novo_livro = document.createElement("div")
    novo_livro.classList.add("card")

    const titulo = document.createElement("h2")
    titulo.textContent = `Titulo: ${livro.titulo}`

    const autor = document.createElement("h3")
    autor.textContent = `Autor: ${livro.autor}`

    const ano = document.createElement("h3")
    ano.textContent = `Ano: ${livro.ano}`

    const genero = document.createElement("h3")
    genero.textContent = `Genero: ${livro.genero}`

    novo_livro.appendChild(titulo)
    novo_livro.appendChild(autor)
    novo_livro.appendChild(ano)
    novo_livro.appendChild(genero)


    cartoes.appendChild(novo_livro)

}

function cadastrarLivro(e){
    e.preventDefault()

    const livro = {
        titulo: titulo.value,
        autor: autor.value,
        ano: ano.value,
        genero: genero.value,

    }




    const lista = JSON.parse(localStorage.getItem("lista_de_livros")) || []

    lista.push(livro)

    localStorage.setItem("lista_de_livros", JSON.stringify(lista) )



    montarCard(livro)


    titulo.value = ""
    autor.value = ""
    ano.value = ""
    genero.value = ""

    titulo.focus()
}


function carregarPagina(){

    const lista = JSON.parse(localStorage.getItem("lista_de_livros")) || []


    lista.forEach((item)=>{
        montarCard(item)
    })
}


formulario.addEventListener("submit", cadastrarLivro)

carregarPagina()