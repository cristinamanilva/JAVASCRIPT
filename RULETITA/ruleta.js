class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(eventName, callback) {
    (this.listeners[eventName] ||= []).push(callback);
  }

  emit(eventName, ...args) {
    (this.listeners[eventName] || []).forEach((cb) => cb(...args));
  }
}

/* ---------- Confeti (sin librerías) ---------- */
class Confetti {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "confetti";
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.running = false;
    this.colors = ["#ffcd01", "#685ca2", "#029ede", "#a7d02a", "#26cda2", "#e50304", "#eb7108", "#8f3389"];
  }

  burst(count = 150) {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
      const speed = 8 + Math.random() * 11;
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height * 0.55,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 6 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        life: 1,
      });
    }

    if (!this.running) {
      this.running = true;
      this.loop();
    }
  }

  loop() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles = this.particles.filter((p) => p.life > 0 && p.y < canvas.height + 20);

    for (const p of this.particles) {
      p.vy += 0.25; // gravedad
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 0.006;

      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    }

    if (this.particles.length) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

/* ---------- Ventana de resultado ---------- */
class ResultModal {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.className = "result-overlay";
    this.overlay.innerHTML = `
    <div class="result-card">
        <p class="result-sub"></p>
        <h2 class="result-name"></h2>
        <button type="button" class="result-close">Cerrar</button>
        <p class="result-fine">Prometemos que no está trucado 🤞</p>
    </div>`;
    document.body.appendChild(this.overlay);

    this.sub = this.overlay.querySelector(".result-sub");
    this.name = this.overlay.querySelector(".result-name");
    this.overlay.querySelector(".result-close").addEventListener("click", () => this.hide());
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.hide();
    });
  }

  show(sub, name, color) {
    this.sub.textContent = sub;
    this.name.textContent = name;
    this.name.style.color = color;
    this.overlay.classList.add("open");
  }

  hide() {
    this.overlay.classList.remove("open");
  }
}

/* ---------- Ruleta ---------- */
class SpinWheel {
  constructor({ canvasSelector, buttonSelector, sectors, friction = 0.991 }) {
    this.sectors = sectors;
    this.friction = friction;
    this.canvas = document.querySelector(canvasSelector);
    this.context = this.canvas.getContext("2d");
    this.button = document.querySelector(buttonSelector);
    this.diameter = this.canvas.width;
    this.radius = this.diameter / 2;
    this.totalSectors = sectors.length;
    this.arcAngle = (2 * Math.PI) / this.totalSectors;
    this.angle = 0;
    this.angularVelocity = 0;
    this.spinButtonClicked = false;
    this.dragging = false;
    this.dragVelocity = 0;
    this.lastIndex = 0;
    this.flap = 0;
    this.events = new EventEmitter();
    this.init();
  }

  get currentIndex() {
    return (
      Math.floor(this.totalSectors - (this.angle / (2 * Math.PI)) * this.totalSectors) %
      this.totalSectors
    );
  }

  drawSector(sector, index) {
    const ctx = this.context;
    const startAngle = this.arcAngle * index;
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(this.radius, this.radius);
    ctx.arc(this.radius, this.radius, this.radius, startAngle, startAngle + this.arcAngle);
    ctx.lineTo(this.radius, this.radius);
    ctx.fill();

    ctx.translate(this.radius, this.radius);
    ctx.rotate(startAngle + this.arcAngle / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = sector.textColor;
    ctx.font = `bold ${Math.round(this.diameter * 0.04)}px 'Lato', sans-serif`;
    ctx.fillText(sector.label, this.radius - this.diameter * 0.04, 0);

    ctx.restore();
  }

  drawPeg(index) {
    const ctx = this.context;
    const a = this.arcAngle * index;
    const r = this.radius * 0.965;
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      this.radius + Math.cos(a) * r,
      this.radius + Math.sin(a) * r,
      this.diameter * 0.011,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "#feeb69";
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.restore();
  }

  createPointer() {
    const el = document.createElement("div");
    el.className = "pointer";
    el.innerHTML = `
      <svg viewBox="0 0 40 60">
        <defs>
          <linearGradient id="ptr" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#ff5a5a"/>
            <stop offset="1" stop-color="#b30000"/>
          </linearGradient>
        </defs>
        <path d="M20 58 L5 27 A17 17 0 1 1 35 27 Z"
              fill="url(#ptr)" stroke="#feeb69" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="20" cy="19" r="5" fill="#feeb69"/>
      </svg>`;
    this.canvas.parentElement.appendChild(el);
    return el;
  }

  updatePointer() {
    const idx = this.currentIndex;
    if (idx !== this.lastIndex) {
      this.lastIndex = idx;
      if (this.angularVelocity || this.dragging) this.flap = 1; // un clavo pasa bajo la aguja
    }
    this.flap *= 0.88; // vuelve a su sitio
    this.pointer.style.transform = `rotate(${-this.flap * 32}deg)`;
  }

  rotateCanvas() {
    this.canvas.style.transform = `rotate(${this.angle - Math.PI / 2}rad)`;
  }

  updateFrame() {
    this.updatePointer();

    if (this.dragging) {
      this.rotateCanvas();
      return;
    }

    if (!this.angularVelocity && this.spinButtonClicked) {
      const winningSector = this.sectors[this.currentIndex];
      this.spinButtonClicked = false;
      this.button.classList.remove("disabled");
      this.events.emit("finishSpinning", winningSector);
      return;
    }

    this.angularVelocity *= this.friction;
    if (Math.abs(this.angularVelocity) < 0.002) this.angularVelocity = 0;

    this.angle += this.angularVelocity;
    this.angle %= 2 * Math.PI;

    this.rotateCanvas();
  }

  startSimulation() {
    const animate = () => {
      this.updateFrame();
      requestAnimationFrame(animate);
    };
    animate();
  }

  setupDrag() {
    const area = this.canvas.parentElement; // #spinWheel
    let last = null;

    const pointerAngle = (e) => {
      const r = this.canvas.getBoundingClientRect();
      return Math.atan2(
        e.clientY - (r.top + r.height / 2),
        e.clientX - (r.left + r.width / 2),
      );
    };

    area.addEventListener("pointerdown", (e) => {
      if (this.angularVelocity || this.spinButtonClicked) return; // ya está girando
      this.dragging = true;
      this.dragVelocity = 0;
      last = { a: pointerAngle(e), t: e.timeStamp };
      area.setPointerCapture(e.pointerId);
      area.classList.add("grabbing");
    });

    area.addEventListener("pointermove", (e) => {
      if (!this.dragging) return;
      const a = pointerAngle(e);
      let d = a - last.a;
      if (d > Math.PI) d -= 2 * Math.PI;
      if (d < -Math.PI) d += 2 * Math.PI;
      const dt = Math.max(e.timeStamp - last.t, 1);

      this.angle = (this.angle + d) % (2 * Math.PI); // la ruleta sigue al ratón
      this.dragVelocity = 0.6 * this.dragVelocity + 0.4 * ((d / dt) * 16.7);
      last = { a, t: e.timeStamp };
    });

    const release = (e) => {
      if (!this.dragging) return;
      this.dragging = false;
      area.classList.remove("grabbing");

      const stoppedBeforeRelease = e.timeStamp - last.t > 80;
      const v = stoppedBeforeRelease ? 0 : this.dragVelocity;
      if (Math.abs(v) < 0.08) return; // empujón muy flojo: no cuenta

      this.angularVelocity = Math.max(-0.6, Math.min(0.6, v));
      this.spinButtonClicked = true;
      this.button.classList.add("disabled");
    };

    area.addEventListener("pointerup", release);
    area.addEventListener("pointercancel", release);
  }

  init() {
    this.sectors.forEach((sector, index) => this.drawSector(sector, index));
    for (let i = 0; i < this.totalSectors; i++) this.drawPeg(i);
    this.pointer = this.createPointer();
    this.rotateCanvas();
    this.startSimulation();
    this.setupDrag();
  }
}

const wheelSectors = [
  { color: "#e4b90a", textColor: "#ffffff", label: "Cris" },
  { color: "#685ca2", textColor: "#ffffff", label: "Malena" },
  { color: "#029ede", textColor: "#ffffff", label: "Alvaro Ceballos" },
  { color: "#a7d02a", textColor: "#ffffff", label: "Aitor" },
  { color: "#26cda2", textColor: "#ffffff", label: "Kassandra" },
  { color: "#28004f", textColor: "#ffffff", label: "Repetimos" },
  { color: "#8f3389", textColor: "#ffffff", label: "Helena" },
  { color: "#232026", textColor: "#ffffff", label: "Ale" },
  { color: "#e50304", textColor: "#ffffff", label: "Pablo" },
  { color: "#32a625", textColor: "#ffffff", label: "Pilar" },
  { color: "#eb7108", textColor: "#ffffff", label: "Mari Carmen" },
  { color: "#e4b90a", textColor: "#ffffff", label: "Mariela" },
  { color: "#e50403", textColor: "#ffffff", label: "Repetimos" },
  { color: "#685ca4", textColor: "#ffffff", label: "Alvaro Correa" },
  { color: "#049dde", textColor: "#ffffff", label: "Lola" },
  { color: "#a7d02a", textColor: "#ffffff", label: "Gonzalo" },
  { color: "#26cda2", textColor: "#ffffff", label: "Ramon" },
  { color: "#903389", textColor: "#ffffff", label: "Juanjo" },
  { color: "#eb7108", textColor: "#ffffff", label: "Repetimos" },
];

const spinWheel = new SpinWheel({
  canvasSelector: "#wheel",
  buttonSelector: "#spin",
  sectors: wheelSectors,
});

const confetti = new Confetti();
const modal = new ResultModal();

spinWheel.events.on("finishSpinning", (sector) => {
  if (sector.label === "Repetimo") {
    modal.show("Ha salido…", "¡Repetimos! 🔁", "#232026");
    return;
  }
  modal.show("Lo Sentimos!", sector.label, sector.color);
  confetti.burst();
  setTimeout(() => confetti.burst(100), 350);
});