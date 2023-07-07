// Variables to store hour, minute, second, and last (hundredth of a second)
let hour = 0;
let min = 0;
let sec = 0;
let last = 0;
let timer = false;

// Get all the buttons on the page
let buttons = document.querySelectorAll('button');

// Add event listeners to each button
buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    let category = e.currentTarget.id;
    console.log(category);

    // Check which button was clicked
    if (category == 'start') {
      timer = true;
      stopwatch();
    } else if (category == 'stop') {
      timer = false;
    } else {
      timer = false;
      hour = 0;
      min = 0;
      sec = 0;
      last = 0;

      // Reset the display to "00"
      document.getElementById("hour").innerHTML = "00";
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
      document.getElementById("last").innerHTML = "00";
    }
  })
});

// Function to update the stopwatch time
function stopwatch() {
  if (timer == true) {
    last++;

    // Increment seconds and reset "last" after 100 iterations
    if (last == 100) {
      sec++;
      last = 0;
    }

    // Increment minutes and reset seconds
    if (sec == 60) {
      min++;
      sec = 0;
    }

    // Increment hours and reset minutes and seconds
    if (min == 60) {
      hour++;
      min = 0;
      sec = 0;
    }

    // If 24 hours have passed, reset everything
    if (hour === 24) {
      timer = false;
      hour = 0;
      min = 0;
      sec = 0;
      last = 0;

      // Reset the display to "00"
      document.getElementById("hour").innerHTML = "00";
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
      document.getElementById("last").innerHTML = "00";
    }

    // Format the time with leading zeros
    let newhour = hour;
    let newmin = min;
    let newsec = sec;
    let newlast = last;

    if (hour < 10) {
      newhour = "0" + newhour;
    }
    if (min < 10) {
      newmin = "0" + newmin;
    }
    if (sec < 10) {
      newsec = "0" + newsec;
    }
    if (last < 10) {
      newlast = "0" + newlast;
    }

    // Update the display with the formatted time
    document.getElementById("hour").innerHTML = newhour;
    document.getElementById("min").innerHTML = newmin;
    document.getElementById("sec").innerHTML = newsec;
    document.getElementById("last").innerHTML = newlast;

    // Call the stopwatch function again after 10 milliseconds
    setTimeout("stopwatch()", 10);
  }
}
