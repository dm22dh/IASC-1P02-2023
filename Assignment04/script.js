function showName(){
    var firstName = document.getElementById("firstname").value;
    // var lastName = document.getElementById("lastname").value;
    document.getElementById("show-name").innerText = "Welcome" + " " + firstName+" " + "!";

    document.getElementById("name-form").hidden = true;
    document.getElementById("show-timer").innerText = "You will be redirected to the Home page in 5 seconds.";
    setTimeout(function() {
    window.location = "./home.html";
    }, 5000);
}


function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    if(hour == 0){
        hour = 12;
    }

    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

// showTime();

window.onload = function() {
    showTime()
}
