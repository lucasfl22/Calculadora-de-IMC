var form = document.getElementById('form'); 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmi = (weight /(height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attencion')

    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5) {
        description = 'Tenha Cuidado! Você está abaixo do peso, classificado como Magro ou Baixo e com risco elevado de comorbidades. Procure um médico da area para lhe auxiliar!'
        } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal! Continue dessa forma.'
        value.classList.remove('attencion')
        value.classList.add('normal')
        } else if (bmi > 25 && bmi <= 30) {
            description = 'Cuidado! Você está com indícios de obesidade, diminua seu IMC com ajuda de profissionais da área'
        } else if (bmi > 30 && bmi <=35) {
        description ='Tenha muito cuidado! Você está com obesidade nível 1, Procure um profissional da área para lhe auxiliar com a diminuição do seu IMC'
        } else if (bmi > 35 && bmi <= 40) {
            description = 'ALERTA de obesidade nível 2, você tem altos riscos de se contagiar com doenças contagiosas. Procure um médico com urgencia para lhe auxiliar com a diminuição do seu IMC'
        } else {
            description = 'ALETA GRAVE! Você está com obesidade nível 3 e você tem níveis elevadissimos de IMC com riscos extremamente altos de se contagiar de doenças perigosas. Procure um médico da área com urgência para lhe auxiliar!'
        }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description
});