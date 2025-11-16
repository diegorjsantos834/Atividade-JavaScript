document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Temperatura');
    const inputTemp = document.getElementById('Tempe');
    
    let resultadoDiv = document.getElementById('resultado_Temp');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado_Temp';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const temperatura = parseFloat(inputTemp.value);
        
        if (isNaN(temperatura)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite uma temperatura válida!</p>';
            return;
        }
        
        const alerta = checarTemperatura(temperatura);
        resultadoDiv.innerHTML = `<p>Temperatura: <strong>${temperatura}°C</strong><br>${alerta}</p>`;
        
        inputTemp.value = '';
        inputTemp.focus();
    });
});

function checarTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Alerta de Frio";
    } else if (temperatura >= 10 && temperatura <= 25) {
        return "Temperatura Ideal";
    } else {
        return "Alerta de Calor";
    }
}