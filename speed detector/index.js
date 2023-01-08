/*function demeritPoints() {
    var speed = document.getElementById("speed").value;
    if (speed < 70) {
    console.log("Ok");
    } else {
    var points = Math.floor((speed - 70) / 5);
    console.log("Demerit points: " + points);
    }
    }*/
    function calculateDemeritPoints() {
        // Get the speed from the input field
        const speed = document.getElementById("speed").value;

        // If the speed is less than 70, print "Ok"
        if (speed < 70) {
          document.getElementById("result").innerHTML = "Ok";
        } else {
          // Calculate the number of demerit points
          const demeritPoints = Math.floor((speed - 70) / 5);
          // Print the number of demerit points
          document.getElementById("result").innerHTML = demeritPoints + " demerit points";
        }
      }