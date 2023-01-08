function calculateGrade() {
    // Get the mark from the input field
    var mark = document.getElementById("mark").value;
  
    // Convert the mark to a number
    mark = Number(mark);
  
    // Initialize the result string
    var result = "";
  
    // Set the result based on the mark
    if  (mark >= 79) {
      result = "A";
    } else if (mark >= 60) {
      result = "B";
    } else if (mark >= 49) {
      result = "C";
    } else if (mark >= 40) {
      result = "D";
    } else if (mark >= 0){
      result = "E";
    }
  
    // Display the result
    document.getElementById("result").innerHTML = result;
  }
  