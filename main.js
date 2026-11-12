// Startar Pixi och skapar en rityta på sidan där funktionen ska visas
const app = new PIXI.Application();
await app.init({ resizeTo: window, background: "#ffffff" });
document.body.appendChild(app.canvas);

// Lägger till prickar
const dots = new PIXI.Graphics();
app.stage.addChild(dots);

// Sparar musens position i x och y-värdet
const mouse = { x: 0, y: 0 };
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// För varje bildruta ritas prickarna i ritytan och växer inom en viss radie
app.ticker.add(() => {
  dots.clear();
  for (let x = 0; x < app.screen.width; x += 30) {
    for (let y = 0; y < app.screen.height; y += 30) {
      const distance = Math.hypot(x - mouse.x, y - mouse.y);
      dots.circle(x, y, Math.max(1, 8 - distance / 30));
    }
  }
  dots.fill("#dd1616"); // lägger till färg på prickarna
});
