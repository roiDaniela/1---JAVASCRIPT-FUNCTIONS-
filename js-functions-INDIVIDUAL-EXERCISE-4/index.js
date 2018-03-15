var avg = function(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++ ){
      sum += parseInt( arr[i], 10 );
  }

  return sum/arr.length;
}

console.log(avg([1,2,3,4,65]));