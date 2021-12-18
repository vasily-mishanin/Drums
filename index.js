//detecting clicks

let buttons = document.querySelectorAll(".drum");
for (let button of buttons) {
  button.addEventListener("click", () => {
    const buttonName = button.innerText;
    makeSound(buttonName);
    buttonAnimation(buttonName);
  });
}

//detecting key presses

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
  console.log(event);
});

//playing sounds

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      return;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      return;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      return;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      return;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      return;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      return;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      return;
    default:
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
