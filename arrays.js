var collegeFriends = ["Samantha", "Angelica", "Beth", "Evelyn", "Raquel"];
collegeFriends.push("Emma", "Rachel");
console.log(collegeFriends);
// this will add "Emma" and "Rachel" to the array
// Index positions: starting with Samantha at 0 and ending with Rachel at 6

var mileLog = [4, 6, 3, 2, 7];
mileLog.pop();
console.log(mileLog);
// this will remove the last element from the array
// Index positions: 4=0, 6=1,3=2,2=4, 7 was removed with .pop


var testAnswers = [true, true, false, true];
testAnswers.shift();
console.log(testAnswers);
// this will remove the first element in the array
// Index positions: first element was removed with .shift and so indexes were shift to the right. false =1
