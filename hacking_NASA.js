// ── Matrix rain ──────────────────────────────────────────────────────────────
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ@#$%&';
const fontSize    = 14;
const columns     = Math.floor(canvas.width / fontSize);
const drops       = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff41';
  ctx.font = fontSize + 'px "Courier New", monospace';

  for (let i = 0; i < drops.length; i++) {
    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

let matrixInterval = setInterval(drawMatrix, 40);

// ── Progress display ──────────────────────────────────────────────────────────
const numlist = [];
for (let i = 0; i <= 100; i++) {
  numlist.push(i + '%');
}
numlist.push('NASA HACKED!');

const id   = document.getElementById('great');
const load = document.querySelector('.load');

// Blinking cursor appended while counting
let cursorVisible = true;
const cursorTimer = setInterval(function() {
  cursorVisible = !cursorVisible;
}, 400);

function ArrayPlusDelay(array, delegate, delay) {
  let i = 0;
  const interval = setInterval(function() {
    delegate(array[i]);
    if (i++ >= array.length - 1) clearInterval(interval);
  }, delay);
  return interval;
}

const inter = ArrayPlusDelay(numlist, function(obj) {
  const isHacked = obj === 'NASA HACKED!';
  if (isHacked) {
    clearInterval(cursorTimer);
    id.textContent = obj;
    id.classList.add('hacked');
  } else {
    id.textContent = obj + (cursorVisible ? '_' : ' ');
  }
}, 80);

// ── Alert state (after ~7.5 s) ────────────────────────────────────────────────
setTimeout(function() {
  document.body.classList.add('alert-state');
  load.style.background = '#1a0000';
  load.style.boxShadow  = 'inset 0 0 30px red';
}, 7500);

// ── Slow down matrix on completion ───────────────────────────────────────────
setTimeout(function() {
  clearInterval(matrixInterval);
  matrixInterval = setInterval(drawMatrix, 120);
}, 8500);

