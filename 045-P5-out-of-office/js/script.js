let font;
let graphic;

function preload() {
  font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(1200, 600);

  graphic = createGraphics(1200, 600);

  graphic.textFont(font);
  graphic.fill("white");
  graphic.textSize(500);
  graphic.textAlign(CENTER, CENTER);
  graphic.text("ooo", 600, 250);
}

function draw() {
  background("black");
  const tileSize = 50;

  for (let y = 0; y < 12; y++) {
    // change on mouseX position
    // let position = winMouseX / windowWidth;
    let position = frameCount;
    position = position % 200;

    if (position > 100) {
      position = 200 - position;
    }

    position = position / 100;
    position = easeInOutCubic(position);
    // start
    const sx = 0;
    const sy = y * tileSize * position;
    const sw = 1200;
    const sh = tileSize * position + (600 - tileSize) * (1 - position);

    // destination
    const dx = 0;
    const dy = y * tileSize;
    const dw = 1200;
    const dh = tileSize;

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
  }
}
