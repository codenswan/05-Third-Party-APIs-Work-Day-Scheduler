//this separate js file was added so the time in the jumbotron would be update each second
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
    datetime = $("#currentDay")
    update();
    setInterval(update, 1000);
});
