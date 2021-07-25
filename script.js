function calcularImc(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / (altura * altura);

    if(isNaN(imc)) imc = 0;
    if(!isFinite(imc)) imc = 0;

    document.querySelector("span").innerHTML = "Seu IMC é "+ imc.toFixed(2) + "<br>" + verificarImc(imc);
}

function verificarImc(imc){
    if(imc < 18.5){
        return "Você está abaixo do peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        return "Você está com peso normal";
    }else if(imc >= 25 && imc <= 29,9){
        return "Você está acima do peso";
    }
}

function pesoIdeal(imc, peso){
    
}

function verificarNegativo(id){
    var valor = document.getElementById(id).value;
    if(valor < 0){
        /* Setar o valor como 0 */
        document.getElementById(id).value = 0;

        var botao = document.getElementById(id).name;
        if(botao == "peso"){
            document.querySelector("span").textContent = "O valor do "+botao+" não pode ser negativo";
        }else{
            document.querySelector("span").textContent = "O valor da "+botao+" não pode ser negativo";
        }
    }else{
        document.querySelector("span").textContent = "";
    }
}