function generateColor() {
  const color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  document.getElementById("colorBox").style.backgroundColor = color;
  document.getElementById("colorCode").textContent = color;
}
