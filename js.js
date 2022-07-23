const buttonChangeColor = document.getElementsByTagName("button");

const getRandomColorHex = () => {
  const symbol = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbol[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changeColorBackground = () => {
  const body = document.getElementsByTagName("body");
  body[0].style.background = getRandomColorHex();
};
buttonChangeColor[0].onclick = changeColorBackground;
