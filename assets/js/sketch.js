let imagemCenario;
let imagemPersonagem;
let cenario;

// Função executada antes do setup
function preload() {
  imagemCenario = loadImage('./assets/img/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/img/personagem/correndo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
}

function draw() {
  cenario.exibe();
  cenario.move();
  image(imagemPersonagem, 0, height - 135, 110, 135, 0, 0, 220, 270);
}

class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }

  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
