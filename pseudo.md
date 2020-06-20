GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
[X] THEN the current day is displayed at the top of the calendar
    [X] element to display the current day. 
WHEN I scroll down
[X] THEN I am presented with timeblocks for standard business hours
    [X] input element for each hour from 9 to 5 i.e. 9 input elements for each hour. 
WHEN I view the timeblocks for that day
[] THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    [] loop function to determine current time and colour code the input elements depending on the 3 conditions (variables) past, present or future 
WHEN I click into a timeblock
[] THEN I can enter an event
    [] click event attach to timeblock input element
WHEN I click the save button for that timeblock
[] THEN the text for that event is saved in local storage
    [] clickevent for local storage
WHEN I refresh the page
[] THEN the saved events persist
    [] how does local storage stay even after refreshed?