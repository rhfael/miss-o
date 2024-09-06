const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta do meio ambiente",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Parabéns,você se importa com o meio ambiente. "
            },
            {
                texto: "Não!",
                afirmacao: "talvez se importe, mas não da muita atenção."
            }
        ]
    },
    {
        enunciado: "Você apoia a preservação do meio ambiente?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "eu apoio pois tem preservação dos ecossistemas bem importantes."
            },
            {
                texto: "Não.",
                afirmacao: "Não tenho muita noção disso mas um pouco me importo."
            }
        ]
    },
    {
        enunciado: "Você teria energia eólica em sua casa?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "eu teria, é uma boa fonte de enrgia sutentavel."
            },
            {
                texto: "Não.",
                afirmacao: "Talvez porque tenha um valor muito alto."
            }
        ]
    };

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
