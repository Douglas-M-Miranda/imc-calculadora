const form = document.querySelector("form")

function pegarValor(e){
    e.preventDefault();

    const formValor = new FormData(e.target);
    let valorPeso = Number(formValor.get("inputPeso"));
    let valorAltura = Number(formValor.get("inputAltura"));

    const resultado = valorPeso / (valorAltura * valorAltura)
    
    receberValor(resultado)
}

form.addEventListener('submit', pegarValor);

function receberValor(resultado) {
    let condição = "você está";
    const numeroImc = document.querySelector(".numeroImc")
    const textoImc = document.querySelector(".textoImc")
 
    if(resultado < 18.5){
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" abaixo do normal");
    }else if(resultado >= 18.6 && resultado < 25){
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" no peso ideal!");
    }else if(resultado >= 25 && resultado < 30){
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" com sobrepeso");
    }else if(resultado >= 30 && resultado < 35){
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" com obesidade grau I");
    }else if(resultado >= 35 && resultado < 40){
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" com obesidade grau II");
    }else{
        numeroImc.textContent = resultado.toFixed(2);
        textoImc.textContent = condição.concat(" com obesidade grau III");
    }

}