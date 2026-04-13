const heart = document.getElementById("heart");
const music = document.getElementById("music");

const images = [
  "images/shery1.jpg",
  "images/shery2.jpg",
  "images/shery3.jpg",
  "images/shery4.jpg",
  "images/shery5.jpg",
  "images/shery6.jpg",
  "images/shery14.jpg",
  "images/shery8.jpg",
  "images/shery9.jpg",
  "images/shery10.jpg",
  "images/shery11.jpg",
];


function createHeart() {
  const total = 30;

  for (let i = 0; i < total; i++) {
    let t = (i / total) * Math.PI * 2;

    // 💖 HEART FORMULA
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2*t)
          - 2 * Math.cos(3*t) - Math.cos(4*t);

    let div = document.createElement("div");
    div.className = "photo";

    div.style.left = `calc(50% + ${x * 15}px)`;
    div.style.top  = `calc(50% - ${y * 15}px)`;

    let img = document.createElement("img");
    img.src = images[i % images.length];

    div.appendChild(img);
    heart.appendChild(div);
  }
}

createHeart();

let angle = 0;

function animate() {
  angle += 0.01;

  const photos = document.querySelectorAll(".photo");

  photos.forEach((el, i) => {
    let t = (i / photos.length) * Math.PI * 2 + angle;

    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2*t)
          - 2 * Math.cos(3*t) - Math.cos(4*t);

    el.style.left = `calc(50% + ${x * 15}px)`;
    el.style.top  = `calc(50% - ${y * 15}px)`;
  });

  requestAnimationFrame(animate);
}

animate();