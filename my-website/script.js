const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix Rain Effect
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41'; // Matrix green
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Uptime Counter
let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById('uptime').innerText = seconds.toString().padStart(2, '0');
}, 1000);

// Chaos Button
document.getElementById('chaos-btn').addEventListener('click', () => {
    document.body.style.animation = "shake 0.5s infinite";
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000'];
    setInterval(() => {
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    }, 100);
});

setInterval(draw, 33);