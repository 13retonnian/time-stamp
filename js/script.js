const stampButton = document.querySelector(".stamp-button");
const stampButtonIndent = document.querySelector(".stamp-button-indent");
//const metalSound = document.querySelector(".metal-sound");
const buttonSound = document.querySelector(".button-sound");
const stampTitle = document.querySelector(".time-stamp-title-input");
const timeStamp = document.querySelector(".time-stamp");
const saveButton = document.querySelector(".save-button");
let textFile = "";
let stampButtonBoolean = false;

const getTimeAndDate = function(){
  currDate = new Date();  
  currDate.toLocaleDateString("en-US");    
  return currDate
}
const printTimeStamp = function() {  
  timeStamp.innerHTML += `<h2>${stampTitle.value}</h2>
  <p>${getTimeAndDate()}</p>`;  
  textFile += `${stampTitle.value} \n ${getTimeAndDate()} \n`;
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
    saveButton.style.display = "block";
  }
  else {
    stampButton.style.display = "block";
    stampButtonIndent.style.display = "none";
    stampButtonBoolean = false;
    //metalSound.play();
  }
}

const saveButtonHandler = function() {

  const a = document.createElement('a');
  const file = new Blob([textFile], {type: "text/plain"});
  
  a.href= URL.createObjectURL(file);
  a.download = "time-stamps.txt";
  a.click();
    
  URL.revokeObjectURL(a.href);
 
}

stampButton.addEventListener("mousedown", stampButtonHandler);
stampButtonIndent.addEventListener("mouseup", stampButtonHandler);
saveButton.addEventListener("click", saveButtonHandler);
