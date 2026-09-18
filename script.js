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
    // 1. Limpiamos el fondo en cada cuadro para que no se encima el texto
    background(0);

    // 2. Volvemos a redibujar el corazón completo de fondo
    stroke("#ff3366");
    strokeWeight(3);
    fill(255, 51, 102, 50);
    beginShape();
    let r = min(width, height) / 40;
    for (let a = 0; a < TWO_PI; a += 0.05) {
      let x = r * 16 * pow(sin(a), 3);
      let y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
      vertex(x, y);
    }
    endShape(CLOSE);

    // 3. Escribimos el mensaje de forma limpia
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
