function test(numInput) {

  var numCounts = [];
  var machineOut = [];


  for (var i = -1; i < numInput; i ++) {
    numCounts.push(i + 1);
    console.log(numCounts);
  }

  for (var i = 0; i < numInput; i++) {
    if (numCounts[i] == 1) {
      machineOut[i] = "beep";
    }
    else if (numCounts[i] == 2) {
      machineOut[i] = "boop";
    }
    else if (numCounts[i] == 3) {
      machineOut[i] = "sorry";
    }
    else {
      machineOut[i] = numCounts[i]
    }
    console.log(machineOut)
  }

// return numCounts


};

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var numInput = $("input#num1").val();
    $("#output").text(test(numInput));

  });
});
