// Масив кольорів для градієнта
const colors = ['#ED3B44', '#C6E327', '#0041E8'];

// Функція для перевірки, чи колір не занадто світлий
function isColorTooLight(hex) {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const brightness = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
    return brightness > 200; // Поріг яскравості
}

// Функція для перевірки, чи колір не занадто сірий
function isColorTooGray(hex) {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    return (max - min) < 15; // Поріг для визначення сірості
}

// Функція для коригування кольору
function adjustColor(hex) {
    if (isColorTooLight(hex) || isColorTooGray(hex)) {
        const rgb = parseInt(hex.slice(1), 16);
        let r = ((rgb >> 16) & 0xff) * 0.8;
        let g = ((rgb >> 8) & 0xff) * 0.8;
        let b = (rgb & 0xff) * 0.8;
        r = Math.round(r).toString(16).padStart(2, '0');
        g = Math.round(g).toString(16).padStart(2, '0');
        b = Math.round(b).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }
    return hex; // Якщо колір не занадто світлий і не занадто сірий, повертаємо оригінальний колір
}

// Коригування кольорів, якщо вони занадто світлі
const adjustedColors = colors.map(color => isColorTooLight(color) ? adjustColor(color) : color);

let currentColorIndex = 0;
let nextColorIndex = 1;
let lerpPercentage = 0;
const totalInterval = 15; // Загальний час для циклу зміни кольору та утримання (5 секунд утримання + 10 секунд зміни)
let lastUpdateTime = 0;

// Функція для інтерполяції між двома кольорами
function lerpColor(color1, color2, lerpFactor) {
    let color1RGB = parseInt(color1.slice(1), 16);
    let color2RGB = parseInt(color2.slice(1), 16);
    let color1R = (color1RGB >> 16) & 0xff;
    let color1G = (color1RGB >> 8) & 0xff;
    let color1B = color1RGB & 0xff;
    let color2R = (color2RGB >> 16) & 0xff;
    let color2G = (color2RGB >> 8) & 0xff;
    let color2B = color2RGB & 0xff;
    let r = Math.round(lerp(color1R, color2R, lerpFactor));
    let g = Math.round(lerp(color1G, color2G, lerpFactor));
    let b = Math.round(lerp(color1B, color2B, lerpFactor));
    return `rgb(${r}, ${g}, ${b})`;
}

// Лінійна інтерполяція між двома значеннями
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateGradient() {
    const currentTime = Date.now();
    const timeElapsed = (currentTime - lastUpdateTime) / 200; // Переводимо мілісекунди у секунди

    if (timeElapsed >= totalInterval) {
        lastUpdateTime = currentTime;
        currentColorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colors.length;
        lerpPercentage = 0;
    } else if (timeElapsed > 5) {
        // Починаємо змінювати колір після 5 секунд утримання
        lerpPercentage = (timeElapsed - 5) / 10; // 10 секунд на зміну кольору
    }

    const gradientElement = document.querySelector('.background-wrapper');
    gradientElement.style.background = lerpColor(colors[currentColorIndex], colors[nextColorIndex], lerpPercentage);

    requestAnimationFrame(updateGradient);
}

// Початок анімації
requestAnimationFrame(updateGradient);

// Функція для збільшення контрастності та насиченості кольору
function enhanceColorContrastAndSaturation(hex) {
    let [h, s, l] = hexToHSL(hex);
    s = Math.min(100, s + 20); // Збільшуємо насиченість на 20%
    l = Math.max(0, l - 20); // Зменшуємо світлість на 10% для збільшення контрастності
    return HSLToHex(h, s, l); // Перетворюємо назад у HEX
}

// Допоміжна функція для перетворення HSL у HEX
function HSLToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // Ахроматичний
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Застосовуємо функцію до кожного кольору в масиві
const enhancedColors = colors.map(color => enhanceColorContrastAndSaturation(color));
