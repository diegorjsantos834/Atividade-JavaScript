document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Verificador_Senha');
    const inputSenha = document.getElementById('Senha');
    
    let resultadoDiv = document.getElementById('resultadoVerificador_Senha');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultadoVerificador_Senha';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const senha = inputSenha.value;
        
        if (!senha) {
            resultadoDiv.innerHTML = '<p>Por favor, digite uma senha!</p>';
            return;
        }
        
        const resultado = senhaForte(senha);
        
        if (resultado) {
            resultadoDiv.innerHTML = '<p>Senha <strong>FORTE</strong>! Atende aos critérios de segurança.</p>';
        } else {
            resultadoDiv.innerHTML = '<p>Senha <strong>FRACA</strong>! Precisa ter mais de 8 caracteres e não pode ser "12345678".</p>';
        }
        
        inputSenha.value = '';
        inputSenha.focus();
    });
});

function senhaForte(senha) {

    //true se tiver mais de 8 caracteres e for diferente de "12345678"
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}