function alterarMensagem(idElemento, novaMensagem) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = novaMensagem;
    } else {
        console.warn(`Elemento com id "${idElemento}" não encontrado.`);
    }
}

let tarefasAdicionadas = [];
let regex = /[a-zA-Z0-9]/;

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    if (tarefa != "" && regex.test(tarefa)){
        alterarMensagem("mensagem", "Tarefa adicionada com sucesso!");
        document.getElementById("mensagem").style.color = ("#28a73dff");
        tarefasAdicionadas.push(tarefa);
        exibirTarefaNaTela();

    } else {
        alterarMensagem("mensagem", "Ops! Digite uma tarefa válida!");
        document.getElementById("mensagem").style.color = ("#a72833ff");
    }
   

    inputTarefa.value = "";
 }
 function exibirTarefaNaTela(){
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML = "";

        for (let i = 0; i < tarefasAdicionadas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefasAdicionadas[i];
        
        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover Tarefa"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar Tarefa"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);
     }
 }
 function removerTarefa(i) {
        tarefasAdicionadas.splice(i, 1);
        exibirTarefaNaTela(); 
        alterarMensagem("mensagem", "Tarefa removida!");
        document.getElementById("mensagem").style.color = ("#a72833ff");

 }
 function editarTarefa(i){
       let tarefaEditada = prompt("Digite a nova tarefa:");

       if (tarefaEditada.trim() != "" && regex.test(tarefaEditada)){
        tarefasAdicionadas[i] = tarefaEditada;
        exibirTarefaNaTela();
        alterarMensagem("mensagem", "Tarefa alterada!");
        document.getElementById("mensagem").style.color = ("28a73dff");
        
       } else {
        alert ("Ops! Digite uma tarefa válida!");
        editarTarefa(i);
 }}