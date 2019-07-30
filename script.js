// let texto

// function mostrarMouse(event){
//     console.log(`Eixo X: ${event.pageX}e Eixo Y ${event.pageY}`);
//     if( event.pageX >= 484 || event.pageY <= 5){
//         alert("NÃO SAIA ")
//     }
// }

// window.onmousemove = mostrarMouse;


// localStorage.setItem(`nome`,`danilo`);

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoSou = document.querySelector("a");


function acessar(){
    localStorage.removeItem('nome', caixaTexto.value);
    h3.innerHTML =`seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML = `nao é ${localStorage}`;
    caixaTexto.style.display = "none"
    botao.style.display = "none"       
}

function limpa(){
    localStorage.removeItem('none');  
}

botao.onclick = acessar;

if(localStorage.nome){
    caixaTexto.style.display = "none"
    botao.style.display = "none"
    h3.innerHTML = `seja bem vinda ${localStorage}`;
    naoSou.innerHTML = `ǹao é ${localStorage}`;
}

else{
    localStorage.setItem(`none`,caixaTexto);
    texto.style.display = "none"
}

naoSou.onclick = limpar;