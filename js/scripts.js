function test(numInput) {

  var numCounts = [];


  for (var i = 0; i < numInput; i ++) {
    numCounts.push(i + 1);
    console.log(numCounts);
  }

// return numOutput;


};

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var numInput = $("input#num1").val();
    $("#output").text(test(numInput));

  });
});
