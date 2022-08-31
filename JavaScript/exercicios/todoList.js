
const listContainer = document.querySelector('[date-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')


let lists = []

//função,  / metodos que liga eventos // recebe dois parametros// função nativa do JS

//                                     2 parametro uma função callback

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    //guardar o que esta no input
    const listName = newListInput.value
    // toda vez que estiver vazio ou nulo não quero que siga 
    if(listName === null || listName === '') return
    const list = createList(listName)
    //limpar imput
    newListInput.value = null
    //push incluir no final do array
    lists.push(list)
    //função para mostrar itens na tela
    render()
})

function createList(name){
    return {id:Date.now().toString(),name: name}
}


function render(){
    clearElement(listContainer)
    //percorrer lista
    // função callback
    lists.forEach(function(list){
        // criar a lista e jogar para HTML
        const item = document.createElement('li')
        item.classList.add('item')
        // vai receber a nossa lista
        item.innerText=list.name
        //em qual elemento do HTML, append passar elemento filho
        listContainer.appendChild(item);

    })

}

  function clearElement(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
  }

