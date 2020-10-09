const cores = ["#de561c", "#fca652", "#d57149", "#fa7d09"];

const mensagens = [
    "No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.",
    "Essa tempestade também vai passar.",
    "Você importa. Você tem valor. Você não está só.",
    "Quando pensar em desistir, lembre-se porque começou.",
    "Você é mais forte do que imagina. Acredite.",
    "O importante não é vencer todos os dias, mas lutar sempre."
];

const botao = document.getElementById("btn");
botao.addEventListener("click", clicar);

const Evt = document.getElementById("msg");

function clicar() {
    let sorteioM = Math.floor(Math.random() * (mensagens.length - 1));
    Evt.innerHTML = mensagens[sorteioM];

    let sorteioC = Math.floor(Math.random() * (cores.length - 1));
    Evt.style.color = cores[sorteioC];
}
