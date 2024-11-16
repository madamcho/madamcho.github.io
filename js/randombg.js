const images = ["img0.jfif", "img1.jfif", "img2.jfif", "img3.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
