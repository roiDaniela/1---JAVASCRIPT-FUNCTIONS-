function calcAge(birtdate){
  var d = new Date();
  var option1 = d.getFullYear() - birtdate;
  var option2 = d.getFullYear() - birtdate + 1;
  
  return "You are either " + option1 +" or " + option2;
}

var age = calcAge(1989);
console.log(age);
