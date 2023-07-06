function calcularImc(){
    
    const form = document.querySelector('.form');
    const resposta = document.querySelector('.resposta');

    function dadosIMC(event){

        event.preventDefault();

        const peso = Number(form.getElementById('peso'));
         const altura = Number(form.getElementById('altura') / 100);
        const resultado = (peso / Math.pow(altura, 2)).toFixed(2) ;

        if(resultado < 18.5){
            return resultado;
        }else if(resultado >= 18.5 && resultado < 25){
            return resultado;
        }else if(resultado >= 25 && resultado < 30){
            return resultado;
        }else if(resultado >= 30 && resultado < 35){
            return resultado;
        }else if(resultado >= 35 && resultado < 40){
            return resultado;
        }else if(resultado > 40 && resultado < 70){
            return resultado;
        } else{
            // alert(`Seu IMC de ${resultado} não é de um humano`);
        }
    }  
    form.addEventListener('submit', dadosIMC);
}

calcularImc();  

    


