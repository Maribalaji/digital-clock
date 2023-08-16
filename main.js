var newdate = new Date();
console.log(newdate);
var getdate = document.getElementById("date");
console.log(getdate);
var getmonth = document.getElementById("month");
console.log(getmonth);
var getyear = document.getElementById("year");
console.log(getyear);
var totaldays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(totaldays);
function displayyear() {
    var date = document.getElementById("date");
    var newdate = new Date();
    var datedisplay = newdate.getDate();
    var monthdisplay = newdate.getMonth() + 1;
    var yeardisplay = newdate.getFullYear();
    console.log(datedisplay);
    console.log(monthdisplay);
    console.log(yeardisplay);
    getdate.innerHTML = datedisplay;
    getmonth.innerHTML = "0" + monthdisplay;
    getyear.innerHTML = yeardisplay;
}
displayyear();
// time function


 function displayTime() {

    var amget = document.getElementById('am');
    console.log(amget);
    var pmget = document.getElementById('pm');
    console.log(pmget);
    var datetime = new Date();
    var hr = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    if (hr > 12) {
        hr = hr - 12;
        pmget.style.backgroundColor = "red";
    }
    else {
        amget.style.backgroundColor = "red";
    }
    document.getElementById("hours").innerHTML = zero(hr);
    document.getElementById("minutes").innerHTML = zero(min);
    document.getElementById("seconds").innerHTML = zero(sec);
    displayyear();
    displayday();
}
function zero(num) {
    return num < 10 ? "0" + num : num;
}

//day find
var sunday = document.getElementById("sun");
console.log(sunday);
var monday = document.getElementById("mon");
console.log(monday);
var tuesday = document.getElementById("tue");
console.log(tuesday);
var wednesday = document.getElementById("wed");
console.log(wednesday);
var thursday = document.getElementById("thu");
console.log(thursday);
var friday = document.getElementById("fri");
console.log(friday);
var saturday = document.getElementById("sat");
console.log(saturday);

function displayday() {
    
    var dats = new Date();
    var day = dats.getDay();
    console.log(day);

    // console.log(day);
    if (totaldays[day] == "sunday") {
        sunday.style.backgroundColor = "red";
    }
    else{
        sunday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "monday") {
        monday.style.backgroundColor = "red";
    }
    else{
        monday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "tuesday") {
        tuesday.style.backgroundColor = "red";
    }
    else{
        tuesday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "wednesday") {
        wednesday.style.backgroundColor = "red";
    }
    else{
        wednesday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "thursday") {
        thursday.style.backgroundColor = "red";
    }
    else{
        thursday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "friday") {
        friday.style.backgroundColor = "red";
    }
    else{
        friday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "saturday") {
        saturday.style.backgroundColor = "red";
    }
    else{
        saturday.style.backgroundColor = "white";
    }


}
displayday()

setInterval(displayTime, 500)