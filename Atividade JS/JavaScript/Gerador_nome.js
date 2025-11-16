document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nomes');
    const inputNome = document.getElementById('nome');
    const inputSobrenome = document.getElementById('sobre');
    
    let resultadoDiv = document.getElementById('resultado_Nome');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado_Nome';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const primeiroNome = inputNome.value.trim();
        const sobrenome = inputSobrenome.value.trim();
        
        if (!primeiroNome || !sobrenome) {
            resultadoDiv.innerHTML = '<p>Por favor, preencha o nome e sobrenome!</p>';
            return;
        }
        
        //objeto com os dados
        const pessoa = {
            primeiroNome: primeiroNome,
            sobrenome: sobrenome
        };
        
        const nomeCompleto = gerarNomeCompleto(pessoa);
        resultadoDiv.innerHTML = `<p>Nome completo: <strong>${nomeCompleto}</strong></p>`;
        
        inputNome.value = '';
        inputSobrenome.value = '';
        inputNome.focus();
    });
});

function gerarNomeCompleto(pessoa) {

    return pessoa.primeiroNome + " " + pessoa.sobrenome;
}