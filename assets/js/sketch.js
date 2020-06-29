let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

// Função executada antes do setup
function preload() {
  imagemCenario = loadImage('./assets/img/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/img/personagem/correndo.png');
  somDoJogo = loadSound('./assets/music/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}
