//this sets the hour in 24h format from moment.js
const thisHour = parseInt(moment().format("HH"))

//these were the original consts for the localStorage functions below
  // const $9AMtasks = $("#09");
  // const $10AMtasks = $("#10")
  // const $11AMtasks = $("#11")
  // const $12PMtasks = $("#12")
  // const $1PMtasks = $("#13")
  // const $2PMtasks = $("#14")
  // const $3PMtasks = $("#15")
  // const $4PMtasks = $("#16")
  // const $5PMtasks = $("#17")

//this is my colour coding function
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

//click event for storing tasks 
$(".saveBtn").on("click", function (event) { 
  event.preventDefault();
  const currentHour = $(this).attr("data-hour")

  localStorage.setItem(currentHour, $("#" + currentHour).val())

//the following was my original code for localStorage until I simplified it
  // localStorage.setItem("9AM", ($9AMtasks.val()))
  // localStorage.setItem("10AM", ($10AMtasks.val()))
  // localStorage.setItem("11AM", ($11AMtasks.val()))
  // localStorage.setItem("12AM", ($12PMtasks.val()))
  // localStorage.setItem("13PM", ($1PMtasks.val()))
  // localStorage.setItem("14PM", ($2PMtasks.val()))
  // localStorage.setItem("15PM", ($3PMtasks.val()))
  // localStorage.setItem("16PM", ($4PMtasks.val()))
  // localStorage.setItem("17PM", ($5PMtasks.val()))
})

//this is my init function to get stored tasks
function init() {

  for (let index = 9; index < 18; index++) {
    
    $("#" + index).val(localStorage.getItem(index));

  }

//this also was my code for retrieving localStorage until I use a loop
  // $("#10").append(localStorage.getItem("10AM"));
  // $("#11").append(localStorage.getItem("11AM"));
  // $("#12").append(localStorage.getItem("12AM"));
  // $("#13").append(localStorage.getItem("13PM"));
  // $("#14").append(localStorage.getItem("14PM"));
  // $("#15").append(localStorage.getItem("15PM"));
  // $("#16").append(localStorage.getItem("16PM"));
  // $("#17").append(localStorage.getItem("17PM"));
}

window.onload = init()