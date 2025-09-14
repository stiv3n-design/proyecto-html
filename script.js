const container = document.getElementById('heartContainer');
const colors = ['#ff74a4', '#ff4d88', '#ff266b', '#fde2e2', '#ffb3c1'];

function createHeart() {
    const heartWrapper = document.createElement('div');
    heartWrapper.classList.add('heart-wrapper');

    const heart = document.createElement('div');
    heart.classList.add('heart');

    heartWrapper.appendChild(heart);
    heartWrapper.style.left = Math.random() * 95 + 'vw';
    heartWrapper.style.animationDuration = (Math.random() * 8 + 7) + 's';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

    const size = Math.random() * 30 + 10;
    heart.style.setProperty('--heart-size', size + 'px');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.backgroundColor = randomColor;
    heart.style.filter = `blur(${Math.random() * 2}px)`;
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(heartWrapper);

    setTimeout(() => {
        heartWrapper.remove();
    }, parseFloat(heartWrapper.style.animationDuration) * 1000 + 500);
}

setInterval(createHeart, 300);

const messageElement = document.querySelector('.message-text');

const poemLines = [
    "Hoy celebramos...",  
    "Nuestro primer mes de novios 👩‍❤️‍👨",  
    "Un mes en el que aprendí...",  
    "Que la felicidad tiene tu nombre 🌹",  
    "En cada mirada 👀💫",  
    "Encuentro un universo infinito ✨",  
    "En cada abrazo...",  
    "Siento que llegué a mi hogar.",  
    "Estos treinta días contigo...",  
    "Me han mostrado lo hermoso de amar 💕",  
    "Eres la razón...",  
    "De mis sonrisas y mis sueños 🌙",  
    "Cada instante contigo..",  
    "Se siente eterno y especial 💎",  
    "Y aunque ha pasado solo un mes...",  
    "Ya deseo toda una vida contigo...",  
    "Gracias por existir 🙏",  
    "Y por elegirme cada día 💞",  
    "Por este primer mes...",  
    "Y por todos los que vendrán 🌟",  
    "Te amo con todo mi corazón ❤️."
];

let currentLineIndex = 0;

const displayTime = 2000;
const fadeTime = 1500;

function showNextLine() {

    messageElement.classList.remove('fade-in');
    messageElement.classList.add('fade-out');

    setTimeout(() => {

        currentLineIndex = (currentLineIndex + 1) % poemLines.length;

        messageElement.textContent = poemLines[currentLineIndex];

        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
    }, fadeTime);
}

setTimeout(() => {
    messageElement.textContent = poemLines[currentLineIndex];
    messageElement.classList.add('fade-in');
}, 1000);

setInterval(showNextLine, displayTime + fadeTime);