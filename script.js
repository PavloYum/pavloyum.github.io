const box = document.querySelector('.box');
let x = 0; // Координата left
let y = 0; // Координата top
let directionX = 1; // Направление по X (1 — вправо, -1 — влево)
let directionY = 1; // Направление по Y (1 — вниз, -1 — вверх)

const t = setInterval(move, 20);

function move() {
  // Изменение координат квадрата
  x += directionX;
  y += directionY;

  // Движение вниз и обратно при достижении границ контейнера
  if (x >= 150 || x <= 0) directionX *= -1; // Меняем направление по X
  if (y >= 150 || y <= 0) directionY *= -1; // Меняем направление по Y

  // Установка новых координат квадрата
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

