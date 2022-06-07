//let, const
let player1 = `Aibar`; 
const player2 = `blabla ${player1}`; 

// DATA TYPES
let team_capacity = 5;
let is_hiring = true;
let team_name = 'Blalalla'; 
team_name = undefined; 

console.log(team_name);

//object
let team = {
    name: "Banana",
    capacity: 5,
    country: "Kz",
  };
  
team.age = 1000; 
let key = "goal";
team[key] = "make kz famous";
console.log(team[key]); 
delete team.age; 
//functions
team.play = function() { 
  console.log(`we lost`); 
}

team.play();

let win = () => console.log(`the ${team.name} loses again`); 

team.win = win; 
team.win(); 

// array
// given the array of team scores, want to find the maximum subarray sum 

let max = (a, b) => (a >= b) ? a : b; 
team.scores = [1, -2, 3, 4, -9, 6];

let getMaxSubSum = function(arr, maxsum = 0, cursum = 0){
  for(el of arr){
    cursum = max(el, cursum + el); 
    maxsum = max(cursum, maxsum); 
  }
  console.log(maxsum); 
}

getMaxSubSum(team.scores);
team.scores.pop(); 
team.scores.unshift(10); 
getMaxSubSum(team.scores);

fake_scores = team.scores.slice(0, -3);
console.log(fake_scores); 
let best_scores = team.scores.filter(item => item > 1); 

let we_can_cheat = team.scores.map(item => (item + 5)* 100);


let [bestPlayer, SecondBestPlayer, ...Halturshiki] = ['Banan', 'Ananas', 'Tupoi', 'Maimyl', 'Zhangak']; 
console.log(...Halturshiki);


//do while
let last_game_score = 1; 
do{
  last_game_score += 1; 
}while(last_game_score < 12);




