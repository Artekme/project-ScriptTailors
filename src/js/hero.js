// Функції для перевірки та коригування кольору
function isColorTooLight(hex) {
    const num = parseInt(hex.slice(1), 16);
    const red = num >> 16 & 255;
    const green = num >> 8 & 255;
    const blue = num & 255;
    const brightness = Math.sqrt(.299 * red * red + .587 * green * green + .114 * blue * blue);
    return brightness > 200;
}

function isColorTooGray(hex) {
    const num = parseInt(hex.slice(1), 16);
    const red = num >> 16 & 255;
    const green = num >> 8 & 255;
    const blue = num & 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    return max - min < 15;
}

function adjustColor(hex) {
    if (isColorTooLight(hex) || isColorTooGray(hex)) {
        const num = parseInt(hex.slice(1), 16);
        let red = (num >> 16 & 255) * .8;
        let green = (num >> 8 & 255) * .8;
        let blue = (num & 255) * .8;
        red = Math.round(red).toString(16).padStart(2, "0");
        green = Math.round(green).toString(16).padStart(2, "0");
        blue = Math.round(blue).toString(16).padStart(2, "0");
        return `#${red}${green}${blue}`;
    }
    return hex;
}

// Функції для плавної зміни кольору
function lerp(start, end, amt) {
    return start + (end - start) * amt;
}

function lerpColor(startHex, endHex, amt) {
    const startNum = parseInt(startHex.slice(1), 16);
    const endNum = parseInt(endHex.slice(1), 16);
    const startRed = startNum >> 16 & 255;
    const startGreen = startNum >> 8 & 255;
    const startBlue = startNum & 255;
    const endRed = endNum >> 16 & 255;
    const endGreen = endNum >> 8 & 255;
    const endBlue = endNum & 255;
    const red = Math.round(lerp(startRed, endRed, amt));
    const green = Math.round(lerp(startGreen, endGreen, amt));
    const blue = Math.round(lerp(startBlue, endBlue, amt));
    return `rgb(${red}, ${green}, ${blue})`;
}

// Основна функція для оновлення градієнта
function updateGradient() {
    const now = Date.now();
    const interval = (now - lastUpdateTime) / 200;
    if (interval >= totalInterval) {
        lastUpdateTime = now;
        currentColorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colors.length;
        lerpPercentage = 0;
    } else if (interval > 5) {
        lerpPercentage = (interval - 5) / 10;
    }
    const wrapper = document.querySelector('.background-wrapper');
    wrapper.style.background = lerpColor(colors[currentColorIndex], colors[nextColorIndex], lerpPercentage);
}

// Масив кольорів для градієнта
const colors = ['#ED3B44', '#C6E327', '#0041E8'];
let currentColorIndex = 0;
let nextColorIndex = 1;
let lerpPercentage = 0;
const totalInterval = 15;
let lastUpdateTime = 0;

// Додавання обробників подій для секції "hero"
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', () => {
    requestAnimationFrame(updateGradient);
});

heroSection.addEventListener('mouseleave', () => {
    cancelAnimationFrame(updateGradient);
});