document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Calculadora');
    const inputNota1 = document.getElementById('media1');
    const inputNota2 = document.getElementById('media2');
    
    let resultadoDiv = document.getElementById('resultado_calc');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado_calc';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const N1 = parseFloat(inputNota1.value);
        const N2 = parseFloat(inputNota2.value);
        
        if (isNaN(N1) || isNaN(N2)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite notas válidas!</p>';
            return;
        }
        
        const resultado = calcularMediaSimples(N1, N2);
        const media = (N1 + N2) / 2;
        
        resultadoDiv.innerHTML = `<p>Nota 1: <strong>${N1}</strong><br>Nota 2: <strong>${N2}</strong><br>Média: <strong>${media.toFixed(2)}</strong><br>Resultado: <strong>${resultado}</strong></p>`;
        
        inputNota1.value = '';
        inputNota2.value = '';
        inputNota1.focus();
    });
});

function calcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;
    
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}