const thisHour = $(".hour").attr("id");
const taskInput = $(".task-input");
// console.log(thisHour);
// console.log(moment().format("hh"));

function colourCode(){
  for (let index = 0; index < taskInput.length; index++) {
    const element = taskInput[index];
    console.log(element);
  }
  
  if (moment().format("hh") === thisHour) {
    taskInput[index].addClass("present")
  } 
}

colourCode()

// assign colour coding to the textarea depending on the current time
  //give each textarea an id to represent the hour
  //then compare the hour id to the current time 


