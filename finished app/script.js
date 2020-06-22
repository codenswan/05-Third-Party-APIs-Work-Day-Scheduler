var dayPlannerRows = [{
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        tasks: "",
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        tasks: "",
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        tasks: "",
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        tasks: "",
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        tasks: "",
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        tasks: "",
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        tasks: "",
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        tasks: "",
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        tasks: "",
    },
];

dayPlannerRows.forEach(function (thisHour) {
    let hourRow = $("<form>")
        .attr({
            class: "row",
        });

    $(".container").append(hourRow);

    let hoursCol = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            class: "col-1 hour time-block",
        });

    let taskCol = $("<div>").attr({
        "class": "col-10 description p-0"
    });

    let taskItem = $("<textarea>");
    taskCol.append(taskItem);
    taskItem.attr("id", thisHour.id);

    if (thisHour.time === moment().format("HH")) {
        taskItem.attr({
            "class": "present",
        })
    
    } else if (thisHour.time > moment().format("HH")) {
        taskItem.attr({
            "class": "future",
        })
    } else if (thisHour.time < moment().format("HH")) {
        taskItem.attr({
            "class": "past",
        })
    }


    let localStoreBtn = $("<i class='far fa-save fa-3x'></i>");
    let saveCol = $("<button>")
        .attr({
            "class": "col-1 saveBtn"
        });

    saveCol.append(localStoreBtn);
    hourRow.append(hoursCol, taskCol, saveCol)
});


function saveTasks() {
    localStorage.setItem("dayPlannerRows", JSON.stringify(dayPlannerRows));
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    let savedTasks = $(this).siblings(".description").children(".future").attr("id");
    dayPlannerRows[saveTasks].tasks = $(this).siblings(".description").children(".future").val();
    console.log(saveTasks);
    saveTasks();
});