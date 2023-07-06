// 1 - Capturar evento de submit do form

const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');  //.target vai informar o elemento que está recebendo o evento
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado() 
    }

    console.log(peso, altura)
    setResultado();
});

function criarParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const paragrafo = criarParagrafo();
} 
