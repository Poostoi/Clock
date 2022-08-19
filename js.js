const buttonChangeColor = document.querySelector(".color");
const buttonChangeImage = document.querySelector(".photo");
let counterImage = 1;
const getRandomColorHex = () => {
  const symbol = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbol[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getNextImage = () => {
  if (counterImage >= 3) {
    counterImage = 0;
  }
  counterImage++;
  return `/media/${counterImage}.jpg`;
};
const changeColorBackground = () => {
  const main = document.querySelector(".main");
  main.style.backgroundImage = "none";
  main.style.background = getRandomColorHex();
};
const changePhotoBackground = () => {
  const main = document.querySelector(".main");
  main.style.backgroundImage = `url(${getNextImage()})`;
  main.style.backgroundSize = "100% 100%";
};
buttonChangeColor.onclick = changeColorBackground;
buttonChangeImage.onclick = changePhotoBackground;
