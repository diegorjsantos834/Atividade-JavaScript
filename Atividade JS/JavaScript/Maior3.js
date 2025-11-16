document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Maiorq3');
    const inputNumero1 = document.getElementById('valor');
    const inputNumero2 = document.getElementById('valor2');
    const inputNumero3 = document.getElementById('valor3');
    let resultadoDiv = document.getElementById('resultadoMaiorq3');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultadoMaior3';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const num1 = parseFloat(inputNumero1.value);
        const num2 = parseFloat(inputNumero2.value);
        const num3 = parseFloat(inputNumero3.value);
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite números válidos!</p>';
            return;
        }

        let maior = num1;
        if (num2 > maior) {
            maior = num2;
        }
        if (num3 > maior) {
            maior = num3;
        }
        resultadoDiv.innerHTML = `<p>O maior número entre ${num1}, ${num2} e ${num3} é <strong>${maior}</strong>.</p>`;
        inputNumero1.value = '';
        inputNumero2.value = '';
        inputNumero3.value = '';
        inputNumero1.focus();
    });

});
