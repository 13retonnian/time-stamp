const stampButton = document.querySelector(".stamp-button");
const stampButtonIndent = document.querySelector(".stamp-button-indent");
//const metalSound = document.querySelector(".metal-sound");
const buttonSound = document.querySelector(".button-sound");
const stampTitle = document.querySelector(".time-stamp-title-input");
const timeStamp = document.querySelector(".time-stamp");
let stampButtonBoolean = false;

const getTimeAndDate = function(){
  currDate = new Date();  
  currDate.toLocaleDateString("en-US");    
  return currDate
}
const printTimeStamp = function() {  
  timeStamp.innerHTML += `<h2>${stampTitle.value}</h2>
  <p>${getTimeAndDate()}</p>`;  
}
const stampButtonHandler = function(event) {
  event.preventDefault();

  if(!stampButtonBoolean) {
    stampButton.style.display = "none";
    stampButtonIndent.style.display = "block";
    stampButtonBoolean = true;
    printTimeStamp();
    //clear input box
    stampTitle.value = "";
    buttonSound.play();    
  }
  else {
    stampButton.style.display = "block";
    stampButtonIndent.style.display = "none";
    stampButtonBoolean = false;
    //metalSound.play();
  }
}

stampButton.addEventListener("mousedown", stampButtonHandler);
stampButtonIndent.addEventListener("mouseup", stampButtonHandler);
