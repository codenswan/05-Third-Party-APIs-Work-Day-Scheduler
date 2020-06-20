const thisHour = $(".hour").text();
const taskInput = $(".task-input");
console.log(thisHour);
console.log(moment().format("h A"));

function colourCode(){
  for (let index = 0; index < thisHour.length; index++) {
    const hoursArr = thisHour[index];
    console.log(hoursArr)

    if (moment().format("h A") === thisHour) {
      $(taskInput[index]).addClass("present")
    } else if (moment().format("h A") < thisHour) {
      $(taskInput[index]).addClass("past")
    } else(moment().format("h A") > thisHour) 
      $(taskInput[index]).addClass("future")
    
  }

}
  


colourCode()

// assign colour coding to the textarea depending on the current time
  //give each textarea an id to represent the hour
  //then compare the hour id to the current time 


