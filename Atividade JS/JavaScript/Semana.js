document.addEventListener('DOMContentLoaded', function() {
    const form =document.getElementById('Semana_Form');
    const inputNumero = document.getElementById('Semana');
    
    // Criar div para resultado se não existir
    let resultadoDiv = document.getElementById('resultadoSemana');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultadoSemana';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const dia = parseInt(inputNumero.value);

        if (isNaN(dia) || dia < 1 || dia > 7) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um número válido entre 1 e 7!</p>';
            return;
        }

        let nomeDia = "";
        switch (dia) {
            case 1:
                nomeDia = "Domingo";
                break;
            case 2:
                nomeDia = "Segunda-feira";
                break;
            case 3:
                nomeDia = "Terça-feira";
                break;
            case 4:
                nomeDia = "Quarta-feira";
                break;
            case 5:
                nomeDia = "Quinta-feira";
                break;
            case 6:
                nomeDia = "Sexta-feira";
                break;
            case 7:
                nomeDia = "Sábado";
                break;
        }
        resultadoDiv.innerHTML = `<p>O número ${dia} corresponde a: <strong>${nomeDia}</strong>.</p>`;
        inputNumero.value = '';
        inputNumero.focus();
    });
});


       