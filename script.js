// const thisHour = parseInt($(".hour").text());
// const taskInput = $(".task-input");
// console.log(thisHour);
// console.log(parseInt(moment().format("h")));


      // if (parseInt(moment().format("h")) === thisHour) {
      //   taskInput.addClass("present")
      // } else if (parseInt(moment().format("h")) < thisHour) {
      //   taskInput.addClass("past")
      // } else(parseInt(moment().format("h")) > thisHour)
      //   taskInput.addClass("future")

const thisHour = parseInt(moment().format("HH"))

$("textarea").each(function() {
      
  let hourColour = parseInt($(this).attr("id"));
  if (hourColour === thisHour) {
    $(this).addClass("present")
  }
  if (hourColour > thisHour) {
    $(this).addClass("future")
  }
  if (hourColour < thisHour) {
    $(this).addClass("past")
  }
})

$(".saveBtn").on("click", function () { 
  let tasks = 
})
  


// colourCode()

// assign colour coding to the textarea depending on the current time
  //give each textarea an id to represent the hour
  //then compare the hour id to the current time 


