let numInput = document.getElementById("numInput");
let keys = document.querySelectorAll("li span");
let beep = document.createElement("audio");
beep.src = "assets/beep.mp3";

let charArray = [];

const keyPress = () => {
  keys.forEach((key) => {
    key.addEventListener("mousedown", () => {
      charArray.push(key.innerHTML);
      numInput.innerHTML = charArray;
      //   console.log(key.innerHTML);
      beep.play();
    });
  });
};

keyPress();
