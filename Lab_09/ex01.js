// Function to calculate and display the time difference
function stopTime() {
    // Get the current time
    var stop = new Date();
    
    var timeDifference = (stop.getTime() - start.getTime()) / 1000;

    alert("You have been on the page for: " + timeDifference + " seconds");
}

// a variable to store the start time when the page loads
var start = new Date();