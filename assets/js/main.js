const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');  //.target vai informar o elemento que está recebendo o evento
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value / 100);

    if(!peso){
        setResultado('Peso inválido', false);
        return; 
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc)

    const msg = `Seu imc é ${imc} (${indiceImc});`

    setResultado(msg, true);
});

function getIndiceImc(imc){
    const indicesImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 40) return indicesImc[5];
    if (imc >= 34.9) return indicesImc[4];
    if (imc >= 29.9) return indicesImc[3];
    if (imc >= 24.9) return indicesImc[2];
    if (imc >= 18.5) return indicesImc[1];
    if (imc < 18.5) return indicesImc[0];
    
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const paragrafo = criarParagrafo();

    if(isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = msg
    resultado.appendChild(paragrafo)
} 
