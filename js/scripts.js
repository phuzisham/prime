$(document).ready(function() {
  $("#primeNumber").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userInput").val());
    arr(userNumber);
    prime(userNumber);

  });
});
var numArr = [];
function arr(num){
  for(var i = 2; i <= num; i++) {
    numArr.push(i)
  }
}
//arr(100);


function prime(num) {
  for (var i = numArr.length - 1;i >= 0; i--) {
    for (var j = 2; j < numArr[i]; j++) {
      var number = numArr[i];
      if (number % j === 0) {
        numArr.splice(i, 1);
        $('#result').append(numArr + '<br>');
      }
    }
  }
}

//prime(100);
//alert(numArr);
