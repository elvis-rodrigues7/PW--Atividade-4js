var res = document.querySelector('.resultado');
var ti = document.querySelector('.title')
var but = document.querySelector('.but');

ti.addEventListener('load', sortear)
but.addEventListener('click', play);


function sortear(){
    var min = 1;
    var max = 100;
    var dif = max - min;
    var aleatorio = Math.random();
    var computador = 1 + Math.trunc(dif + aleatorio);
}

function play() {
    jogador = Number(window.prompt('Qual é o seu Palpite'))
    if (jogador < computador){
        res.innerHTML += `<p>Você chutou ${jogador}. Meu número é <strong>MAIOR!</strong></p></br>`
    } else if (jogador > computador){
        res.innerHTML += `<p>Você chutou ${jogador}. Meu número é <strong>Menor!</strong></p></br>`
    } else {
        res.innerHTML += `<p> Você chutou ${jogador}. Você acertou!! Meu número é ${computador}.`
    }
}
