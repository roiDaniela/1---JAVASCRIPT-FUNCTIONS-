var printSmall = function(arr, num){
  arr.forEach(function(n) {
    if(n <= num){
      console.log(n + " "); 
    }
  });
}

printSmall([1,2,3,4], 4);