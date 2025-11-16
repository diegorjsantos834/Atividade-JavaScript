document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('podeDirigir');
    const inputNumero = document.getElementById('idade');
    

    let resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const idade = parseInt(inputNumero.value);
        if (isNaN(idade)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite uma idade válida!</p>';
            return;
        }   
        if (idade >= 18) {
            resultadoDiv.innerHTML = `<p>Com ${idade} anos, você <strong>Pode</strong> dirigir!</p>`;
        }
        else {
            resultadoDiv.innerHTML = `<p>Com ${idade} anos, você <strong>Não pode</strong> dirigir!</p>`;
        }
        inputNumero.value = '';
        inputNumero.focus();
    });
    
});