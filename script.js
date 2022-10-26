const input = document.querySelector(".input");

const moveInput = () => {
  const inputWidth = input.offsetWidth;
  const inputHeight = input.offsetHeight;
  const winWidth = window.innerWidth - inputWidth;
  const winHeight = window.innerHeight - inputHeight;
  
  input.style.translate = `
  ${Math.floor(Math.random() * (winWidth +1))}px ${Math.floor(Math.random() * (winHeight + 1))}px`;
};
input.addEventListener("mouseover", moveInput);