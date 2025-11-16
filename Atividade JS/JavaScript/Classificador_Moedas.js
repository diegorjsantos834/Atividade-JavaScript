document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Classificador_Moedas');
    const inputValor = document.getElementById('classificador');
    
    
    let resultadoDiv = document.getElementById('resultadoClassificador_Moedas');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultadoClassificador_Moedas';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const valor = parseFloat(inputValor.value);
        
        if (isNaN(valor)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um valor válido!</p>';
            return;
        }
        
        const resultado = classificarMoeda(valor);
        resultadoDiv.innerHTML = `<p>Valor: R$ ${valor.toFixed(2)}<br>Classificação: <strong>${resultado}</strong></p>`;
        
        inputValor.value = '';
        inputValor.focus();
    });
});

function classificarMoeda(valor) {

    const centavos = Math.round(valor * 100);
    
    if (centavos === 1) {
        return "Um Centavo";
    } else if (centavos === 5) {
        return "Cinco Centavos";
    } else if (centavos === 10) {
        return "Dez Centavos";
    } else if (centavos === 25) {
        return "Vinte e Cinco Centavos";
    } else if (centavos === 50) {
        return "Cinquenta Centavos";
    } else if (centavos === 100) {
        return "Um Real";
    } else {
        return "Valor Desconhecido";
    }
}