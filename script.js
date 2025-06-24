// selecionar elementos
const input = document.getElementById('tarefainput');
const btn = document.getElementById('adicionarBtn');
const lista = document.getElementById('listatarefas');

btn.addEventListener('click', function() {
    const texto = input.value.trim()

    if (texto === "") {
        alert("Digite uma tarefa!")
        return
    }

    // criar um novo <li> com o value -> texto
    const item = document.createElement('li');
    item.textContent = texto;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'remover';
    btnRemover.style.marginLeft = '8px';
    btnRemover.addEventListener('click', function (){
        lista.removeChild(item);
    })
    item.appendChild(btnRemover);
    lista.appendChild(item);

    input.value = '';
})
