const btn = document.querySelector(".btn");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const resetColors = document.querySelector(".reset--colors");
const redYellow = document.querySelector(".red--yellow");
const tealCyan = document.querySelector(".teal--cyan");
const grapePink = document.querySelector(".grape--pink");
const blackGrey = document.querySelector(".black--grey");
const greenCyan = document.querySelector(".green--cyan");
const yellowLime = document.querySelector(".yellow--lime");
const blueIndigo = document.querySelector(".blue--indigo");
const grapeViolet = document.querySelector(".grape--violet");
const redPink = document.querySelector(".red--pink");
const limeGreen = document.querySelector(".lime--green");
const yellowGreen = document.querySelector(".yellow--green");
const violetTeal = document.querySelector(".violet--teal");
let activeBtn = 0;
const changeBackgroundColor = function (color1, color2) {
  bodyEl.style.background = `linear-gradient(to right bottom, ${color1}, ${color2})`;
};

const changeText = function (text) {
  spanEl.textContent = `${text}`;
};

const changeTextColor = function (color1, color2) {
  spanEl.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  spanEl.style.webkitBackgroundClip = "text";
  spanEl.style.color = "transparent";
};

const toggleColors = function () {
  redYellow.classList.remove("active");
  tealCyan.classList.remove("active");
  grapePink.classList.remove("active");
  blackGrey.classList.remove("active");
  greenCyan.classList.remove("active");
  yellowLime.classList.remove("active");
  blueIndigo.classList.remove("active");
  grapeViolet.classList.remove("active");
  redPink.classList.remove("active");
  limeGreen.classList.remove("active");
  yellowGreen.classList.remove("active");
  violetTeal.classList.remove("active");
  document.querySelector(`.btn--${activeBtn}`).classList.toggle("active");
};

const resetActiveState = function () {
  document.querySelector(`.btn--${activeBtn}`).classList.remove("active");
};

resetColors.addEventListener("click", function () {
  changeBackgroundColor("#fff", "#fff");
  changeTextColor("#fff", "#fff");
  changeText("White");
  resetActiveState();
});

redYellow.addEventListener("click", function () {
  changeBackgroundColor("#f03e3e", "#f08c00");
  changeTextColor("#f03e3e", "#f08c00");
  changeText("Red + Yellow");
  activeBtn = 0;
  tealCyan.classList.remove("active");
  grapePink.classList.remove("active");
  redYellow.classList.add("active");
  toggleColors();
});

tealCyan.addEventListener("click", function () {
  changeBackgroundColor("#20c997", "#22b8cf");
  changeTextColor("#20c997", "#22b8cf");
  changeText("Teal + Cyan");
  activeBtn = 1;
  toggleColors();
});

grapePink.addEventListener("click", function () {
  changeBackgroundColor("#be4bdb", "#f783ac");
  changeTextColor("#be4bdb", "#f783ac");
  changeText("Grape + Pink");
  activeBtn = 2;
  toggleColors();
});

blackGrey.addEventListener("click", function () {
  changeBackgroundColor("#495057", "#ced4da");
  changeTextColor("#495057", "#ced4da");
  changeText("Black + Grey");
  activeBtn = 3;
  toggleColors();
});

greenCyan.addEventListener("click", function () {
  changeBackgroundColor("#37b24d", "#3bc9db");
  changeTextColor("#37b24d", "#3bc9db");
  changeText("Green + Cyan");
  activeBtn = 4;
  toggleColors();
});

yellowLime.addEventListener("click", function () {
  changeBackgroundColor("#f59f00", "#a9e34b");
  changeTextColor("#f59f00", "#a9e34b");
  changeText("Yellow + Lime");
  activeBtn = 5;
  toggleColors();
});

blueIndigo.addEventListener("click", function () {
  changeBackgroundColor("#339af0", "#91a7ff");
  changeTextColor("#339af0", "#91a7ff");
  changeText("Blue + Indigo");
  activeBtn = 6;
  toggleColors();
});

grapeViolet.addEventListener("click", function () {
  changeBackgroundColor("#e599f7", "#845ef7");
  changeTextColor("#e599f7", "#845ef7");
  changeText("Grape + Violet");
  activeBtn = 7;
  toggleColors();
});

redPink.addEventListener("click", function () {
  changeBackgroundColor("#fa5252", "#e64980");
  changeTextColor("#fa5252", "#e64980");
  changeText("Red + Pink");
  activeBtn = 8;
  toggleColors();
});

limeGreen.addEventListener("click", function () {
  changeBackgroundColor("#94d82d", "#51cf66");
  changeTextColor("#94d82d", "#51cf66");
  changeText("Lime + Green");
  activeBtn = 9;
  toggleColors();
});

yellowGreen.addEventListener("click", function () {
  changeBackgroundColor("#fab005", "#40c057");
  changeTextColor("#fab005", "#40c057");
  changeText("Yellow + Green");
  activeBtn = 10;
  toggleColors();
});

violetTeal.addEventListener("click", function () {
  changeBackgroundColor("#7950f2", "#12b886");
  changeTextColor("#7950f2", "#12b886");
  changeText("Violet + Teal");
  activeBtn = 11;
  toggleColors();
});
