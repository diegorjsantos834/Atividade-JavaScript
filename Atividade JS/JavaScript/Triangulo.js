document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Triângulo');
    const inputLado1 = document.getElementById('lado');
    const inputLado2 = document.getElementById('lado2');
    const inputLado3 = document.getElementById('lado3');
    
    let resultadoDiv = document.getElementById('resultado_Tri');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado_Tri';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const L1 = parseFloat(inputLado1.value);
        const L2 = parseFloat(inputLado2.value);
        const L3 = parseFloat(inputLado3.value);
        
        if (isNaN(L1) || isNaN(L2) || isNaN(L3)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite valores válidos para os três lados!</p>';
            return;
        }
        
        if (L1 <= 0 || L2 <= 0 || L3 <= 0) {
            resultadoDiv.innerHTML = '<p>Os lados do triângulo devem ser maiores que zero!</p>';
            return;
        }
        
        const tipo = tipoTriangulo(L1, L2, L3);
        resultadoDiv.innerHTML = `<p>Lados: <strong>${L1}, ${L2}, ${L3}</strong><br>Tipo: <strong>${tipo}</strong></p>`;
        
        inputLado1.value = '';
        inputLado2.value = '';
        inputLado3.value = '';
        inputLado1.focus();
    });
});

function tipoTriangulo(L1, L2, L3) {
    if (L1 == L2 && L2 == L3) {
        return " Equilátero";
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return " Isósceles";
    } else {
        return " Escaleno";
    }
}