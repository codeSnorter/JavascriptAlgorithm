/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
Taking the first letter of all of the inputs and grouping them next to each other.
Do this for every letter, see example below!

Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
*/
function tripDub(one,two,three) {
  var learning = [one,two,three];
  var answer = ""

for (var i = 0; i < one.length; i++) {
  for (var n = 0; n < learning.length; n++) {
    answer += learning[n].charAt(i)
  }
}



  return answer
}
var x = tripDub("atr","bdr","csr");
console.log(x);
//abcds
