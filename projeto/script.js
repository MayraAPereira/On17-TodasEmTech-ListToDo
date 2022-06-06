// capturar entradas/elementos em variaveis

const novaTarefaInput = document.querySelector('#input_id');
console.log(novaTarefaInput);
//capturando o input
const botaoAdd = document.querySelector('#botao_add_id');
console.log(botaoAdd);
//capturando o botão de add
const listaDeTarefas = document.getElementById('lista_id');
//capturando a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id')
// captura o esqueleto da tarefa
const containerDeTarefas = document.getElementById('tarefas_id')
//container principal que guarda a lista (ul) das tarefas
const form = document.getElementById('form_id')
//capturando meu formulário
const botaoLimpa = document.getElementById('botao_limpa_id')

//função de adicionar a partir do click da usuária, um evento
//mostrar que com o formulário e o evento de submit a tarefa tb seria criada
botaoAdd.addEventListener('click', (evento) => {
    // poderiamos usa o form no lugar do botaoAdd, porem colocariamos o '' no lugar do click
    evento.preventDefault()

    const elementoLista = document.createElement('li')
    //cria o item da lista que não existe no HTML
    const textoTarefa = document.createElement('p')
    //cria o paragrafo que não existe no HTML
    const inconeDeleta = document.createElement('span')
    //cria o item da lista que não existe no HTML


    if(novaTarefaInput.value.trim() === ''){
        alert("digite alguma tarefa")
    } else {
    

    textoTarefa.innerText = novaTarefaInput.value 
    //iguala dentro do parágrafo criado para ser igual ao valor digitado no input
    inconeDeleta.innerText = "🗑"
    // adiciona dentro do spam criado esse icone de lixeira

    listaDeTarefas.appendChild(elementoLista)
    //elemento ul do HTML adotando o item da lista criado mais em cima
    elementoLista.appendChild(textoTarefa)
    //o item da lista adotando o texto criado mais em cima
    elementoLista.appendChild(inconeDeleta)
    //o item da lista tbm adota a lixeira junto com o texto

    modelo.style.display = 'none'
    containerDeTarefas.style.display = "block"
    //coloca div de tarefa com display block para elas aparecerem na tela por padrao tudo tem display block no html


    form.reset() // reseta o furmulário para não aparecer no input o ultimo texto


    }
    textoTarefa.addEventListener('click', ()=>{

        /*if(!textoTarefa.classList.contains
            ('checked')){
        //verificar se o paragrafo da tarefa criada não tem a classe checked e então adiciona
        textoTarefa.classList.add('checked')
        } else {
            textoTarefa.classList.remove('checked')
        }*/
        textoTarefa.classList.toggle('checked')
        //forma mais simples de fazer
    })

    inconeDeleta.addEventListener('click', ()=>{
    elementoLista.remove()

        if(listaDeTarefas.innerText === ''){
            // se o container de tarefas estiver vazio

            modelo.style.display = "flex"
            //remove o display none do esqueleto e coloca um flex para aparecer em tela
            containerDeTarefas.style.display = "none"
            //remove o container de tarefas da tela

        }
    })
})


botaoLimpa.addEventListener('click', ()=>{
    listaDeTarefas.innerHTML = ''
    modelo.style.display = 'flex'
    containerDeTarefas.style.display = 'none'

})
