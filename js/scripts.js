function test(numInput) {

  var numCounts = [];


  for (var i = 0, i < numInput, i + 1) {
    numCounts.push(i + 1);
    // console.log(i);
  }

return numOutput;


};

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var inputNums = $("input#num1").val();
    $("#output").text(test(numInput));

  })
});
