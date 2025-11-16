document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Formatador_Telefone');
    const inputTelefone = document.getElementById('telefone');
    
    let resultadoDiv = document.getElementById('resultado_telefone');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado_telefone';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const telefone = inputTelefone.value.trim();
        
        if (!telefone) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um número de telefone!</p>';
            return;
        }
        
        if (telefone.length !== 8) {
            resultadoDiv.innerHTML = '<p>O telefone deve ter exatamente 8 dígitos! (ex: 99887766)</p>';
            return;
        }
        
        const telefoneFormatado = formatarTelefone(telefone);
        resultadoDiv.innerHTML = `<p>Telefone original: <strong>${telefone}</strong><br>Telefone formatado: <strong>${telefoneFormatado}</strong></p>`;
        
        inputTelefone.value = '';
        inputTelefone.focus();
    });
});

function formatarTelefone(telefone) {
    
    // Divide a string: primeiros 4 dígitos + "-" + últimos 4 dígitos
    const parte1 = telefone.slice(0, 4);  // Pega do índice 0 até 4 (não inclui o 4)
    const parte2 = telefone.slice(4, 8);  // Pega do índice 4 até 8
    
    return parte1 + "-" + parte2;
}