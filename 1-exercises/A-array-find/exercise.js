/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function longNameThatStartsWithA(name){
  if( name.length>7 && name[0]==="A"){
    return name;
    
}
}

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

let findLongNameThatStartsWithA = longNameThatStartsWithA(names);

findLongNameThatStartsWithA = names.find(longNameThatStartsWithA);
console.log(findLongNameThatStartsWithA)

/* EXPECTED OUTPUT */
// "Alexandra"
