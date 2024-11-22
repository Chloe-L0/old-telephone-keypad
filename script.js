let keys = document.querySelectorAll("li span");
let beep = document.createElement("audio");
beep.src = "assets/beep.mp3";

const keyPress = () => {
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      console.log(key.innerHTML);
      beep.play();
    });
  });
};

keyPress();
