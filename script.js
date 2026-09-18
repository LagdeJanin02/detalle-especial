let i = 0;
let mensaje = "Eres mi persona favorita ❤️";
let textoActual = "";
let indiceTexto = 0;
let frameContador = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // Traducir el origen al centro de la pantalla
  translate(width / 2, height / 2);

  // Dibujar el corazón de forma progresiva
  if (i < TWO_PI) {
    stroke("#ff3366");
    strokeWeight(3);
    fill(255, 51, 102, 50);

    // Ecuación paramétrica del corazón
    let r = min(width, height) / 40;
    let x = r * 16 * pow(sin(i), 3);
    let y = -r * (13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i));

    ellipse(x, y, 4, 4);
    i += 0.05;
  } else {
    // Cuando el corazón termina de dibujarse, se escribe el texto
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(width < 600 ? 18 : 24);
    textFont('Courier New');

    frameContador++;
    if (frameContador % 8 === 0 && indiceTexto < mensaje.length) {
      textoActual += mensaje[indiceTexto];
      indiceTexto++;
    }

    text(textoActual, 0, 0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  i = 0;
  textoActual = "";
  indiceTexto = 0;
}