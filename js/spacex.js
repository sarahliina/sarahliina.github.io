// Checks if part of time is under 10 & adds a 0 in front
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Checks if day is 1, 2, or 3 and adds prefix, otherwise th
function checkDay(n) {
  switch (n) {
    case 1:
      n = n + "<sup>st</sup>";
      break;
    case 2:
      n = n + "<sup>nd</sup>";
      break;
    case 3:
      n = n + "<sup>rd</sup>";
      break;
    case 21:
      n = n + "<sup>st</sup>";
      break;
    case 22:
      n = n + "<sup>nd</sup>";
      break;
    case 23:
      n = n + "<sup>rd</sup>";
      break;
    case 31:
      n = n + "<sup>st</sup>";
      break;
    default:
      n = n + "<sup>th</sup>";
      break;
  }
  return n;
}

// Function that displays current date
function date() {
  var date = new Date();
  // Gets todays full date
  var day = date.getDate();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var year = date.getFullYear();
  // Displays date
  document.getElementById("date").innerHTML = checkDay(day) + "\xa0" + months[date.getMonth()] + "<br>" + year;
}

// Run date function
date();

// Function that displays current time and a countdown
function time() {
  var date = new Date();

  // Get todays full time
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Checks if value of time is under 10, then possibly adds a "0"
  hour = checkTime(hour);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  // Displays current time
  document.getElementById("hour").innerHTML = hour + ":";
  document.getElementById("minutes").innerHTML = minutes + ":";
  document.getElementById("seconds").innerHTML = seconds;

  // Refreshes time once every second
  setTimeout(time, 1000);

  // Creates new future date
  var countDownDate = new Date("Oct 5, 2020 15:37:25").getTime();

  // Updates the countdown every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Checks if value of time is under 10, then possibly adds a "0"
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    // Displays the result
    document.getElementById("counter").innerHTML = days + " Days <br>" + hours + " Hours <br>" +
      minutes + " Minutes <br>" + seconds + " Seconds";

  }, 1000);
}

// Runs time function
time();

// Miles Converter
// Gets value of input field after clicking button
document.getElementById("convertMiles").onclick = function() {
  var milesEarth = document.getElementById("inputMiles").value;
  // Converts value
  var milesMars = milesEarth * 0.621;
  // Displays converted miles
  document.getElementById("miles").innerHTML = milesEarth + " km on earth are equal to " + milesMars.toFixed(3) + " miles on mars.";
  // Empties input field after clicking button
  document.getElementById("inputMiles").value = " ";
}

// Gravity Converter
// Gets value of input field after clicking button
document.getElementById("convertGravity").onclick = function() {
  var gravityEarth = document.getElementById("inputGravity").value;
  // Converts vaule
  var gravityMars = gravityEarth * 0.376;
  // Displays converted value
  document.getElementById("gravity").innerHTML = gravityEarth + " kg are equal to " + gravityMars.toFixed(3) + " kg on Mars.";
  // Empties input field after clicking button
  document.getElementById("inputGravity").value = " ";
}

// Decreasing Fuel Bar
function decreaseFuel() {
  // Selects tag containing colour-changing statusbar through targeting class of "status-bar"
  var bar = document.querySelector(".status-bar");
  // Selects button through targeting id of "refuel"
  var fuelButton = document.querySelector("#refuel");
  // Selects border of container through targeting class of "fuelBorder"
  var border = document.querySelector(".fuelBorder");
  // Selects tag containing background bar through targeting class of "background-bar"
  var backgroundBar = document.querySelector(".background-bar");
  // Sets width to 100
  var width = 100;
  // Sets interval to refresh function every second
  var id = setInterval(frame, 1000);

  function frame() {
    // Sets value of width to decrease by 0.34
    width = width - 0.34;
    // Changes current width of statusbar
    bar.style.width = width + "%";
    // Displays current width in statusbar and adds "l"
    bar.innerHTML = width.toFixed(3) + "\xa0" + "l";

    // Checks if width is <= 35 and changes colour of statusbar and border to orange
    if (width <= 35) {
      bar.style.backgroundColor = "orange";
      border.style.borderColor = "#ffb600";
      border.style.boxShadow = "0px 0px 10px 5px #ffb600";
    }

    // Checks if width is <= 15 and changes colour of statusbar and border to red
    if (width <= 15) {
      bar.style.backgroundColor = "red";
      border.style.borderColor = "red";
      border.style.boxShadow = "0px 0px 10px 5px red";
    }

    // Checks if width is <= 1 and displays alert message
    if (width <= 1) {
      // Sets statusbar back to full width
      bar.style.width = 93 + "%";
      // Sets colour of statusbar to transparent to make it invisible
      bar.style.backgroundColor = "transparent";
      // Sets colour of message to red
      bar.style.color = "red";
      // Hides refuel button
      fuelButton.style.visibility = "hidden";
      // Sets colour of background bar to transparent to make it invisible
      backgroundBar.style.backgroundColor = "transparent";
      bar.style.marginLeft = "10px";
      // Displays alert message
      bar.innerHTML = "<b>ALERT</b> <br> Fuel is empty! <br> Prepare to die!";
    }

    // Refuel function when clicking on button
    fuelButton.onclick = function() {
      // Sets interval to run function every 10 milliseconds
      var id = setInterval(frame, 10);

      function frame() {
        // Checks if width is >= 100, then clears interval
        if (width >= 100) {
          clearInterval(id);
        } else {
          // Otherwise adds 1 to width
          width++;
          bar.style.width = width.toFixed(3) + '%';
          // Changes colour of statusbar back to lightcyan
          bar.style.backgroundColor = "lightcyan";
          // Displays current width and adds "l"
          bar.innerHTML = width + "l";
          // Changes colour of border back to lightcyan
          border.style.borderColor = "lightcyan";
          // Changes shadow colour back
          border.style.boxShadow = "0px 0px 10px 5px #0ff";
        }
      }
    }
  }
}

// Runs function
decreaseFuel();

console.log("Welcome to the console!");