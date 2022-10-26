let again = document.getElementById('again');
again.onclick = function(){window.location.reload();}
  //load something when webpage is loaded
  window.onload= function first(){
document.getElementById('box').innerHTML = ('show on page loading');}



 let enemyScore = 0;
 let userScore= 0
 let lives = 4;
//  enemyScore = document.getElementById('enemyScore').innerHTML;

//  lives count
function livesCount(){
   lives--;
document.getElementById("lives").innerHTML = lives;
}

// to move the rocket

function landTheRocket(){
if (lives == 0) {
   document.getElementById("rock").disabled = true;
   document.getElementById("paper").disabled = true;
   document.getElementById("scissors").disabled = true;
} 

if (userScore == 3) {
   document.getElementById("rock").disabled = true;
   document.getElementById("paper").disabled = true;
   document.getElementById("scissors").disabled = true;
} 
   
if(userScore == 0){
   document.getElementById("pic21").style.visibility = "visible";
   document.getElementById("pic22").style.visibility = "hidden";
   document.getElementById("pic23").style.visibility = "hidden";
   document.getElementById("pic24").style.visibility = "hidden";
   document.getElementById("pic25").style.visibility = "hidden";
}



if(userScore == 1){
   document.getElementById("pic21").style.visibility = "hidden";
   document.getElementById("pic22").style.visibility = "visible";
   document.getElementById("pic23").style.visibility = "hidden";
   document.getElementById("pic24").style.visibility = "hidden";
   document.getElementById("pic25").style.visibility = "hidden";
}



if(userScore == 2){
   document.getElementById("pic21").style.visibility = "hidden";
   document.getElementById("pic22").style.visibility = "hidden";
   document.getElementById("pic23").style.visibility = "visible";
   document.getElementById("pic24").style.visibility = "hidden";
   document.getElementById("pic25").style.visibility = "hidden";
}


if(userScore == 3){
   document.getElementById("pic21").style.visibility = "hidden";
   document.getElementById("pic22").style.visibility = "hidden";
   document.getElementById("pic23").style.visibility = "hidden";
   document.getElementById("pic24").style.visibility = "visible";
   document.getElementById("pic25").style.visibility = "hidden";
}


if(enemyScore == 4){
   document.getElementById("pic21").style.visibility = "hidden";
   document.getElementById("pic22").style.visibility = "hidden";
   document.getElementById("pic23").style.visibility = "hidden";
   document.getElementById("pic24").style.visibility = "hidden";
   document.getElementById("pic25").style.visibility = "visible";
}

}
 // function to increase enemy score
function enemyPointInc(){
enemyScore++;
document.getElementById("enemyScore").innerHTML = enemyScore;
}

// function to increase user score
function UserScoreInc(){
   userScore++;
   document.getElementById("userScore").innerHTML = userScore;
}

//what will happen when rock button is clicked
function rockClicked(){
    let pcScore = Math.floor(Math.random()*3);
    let userScore = Math.floor(Math.random()*3);
    console.log(pcScore)
    console.log(userScore)

if (userScore > pcScore) {
   UserScoreInc()
   document.getElementById("bottomUserR").style.visibility = "visible";
   document.getElementById("bottomUserP").style.visibility = "hidden";
   document.getElementById("bottomUserS").style.visibility = "hidden";
   document.getElementById("bottomPcR").style.visibility = "hidden";
   document.getElementById("bottomPcS").style.visibility = "visible";
   document.getElementById("bottomPcP").style.visibility = "hidden";
} if(userScore < pcScore) {
   livesCount();
   enemyPointInc();
   document.getElementById("bottomUserR").style.visibility = "visible";
   document.getElementById("bottomUserP").style.visibility = "hidden";
   document.getElementById("bottomUserS").style.visibility = "hidden";
   document.getElementById("bottomPcR").style.visibility = "hidden";
   document.getElementById("bottomPcS").style.visibility = "hidden";
   document.getElementById("bottomPcP").style.visibility = "visible";
}
if(userScore == pcScore){
document.getElementById("bottomUserR").style.visibility = "visible";
document.getElementById("bottomUserP").style.visibility = "hidden";
document.getElementById("bottomUserS").style.visibility = "hidden";
document.getElementById("bottomPcR").style.visibility = "visible";
document.getElementById("bottomPcP").style.visibility = "hidden";
document.getElementById("bottomPcS").style.visibility = "hidden";
}
landTheRocket()
}
   

//what will happen when paper button is clicked
function paperClicked(){
   let pcScore = Math.floor(Math.random()*3);
   let userScore = Math.floor(Math.random()*3);
   console.log(pcScore)
   console.log(userScore)

if (userScore > pcScore) {
  UserScoreInc()
  document.getElementById("bottomUserR").style.visibility = "hidden";
  document.getElementById("bottomUserP").style.visibility = "visible";
  document.getElementById("bottomUserS").style.visibility = "hidden";
  document.getElementById("bottomPcR").style.visibility = "visible";
  document.getElementById("bottomPcS").style.visibility = "hidden";
  document.getElementById("bottomPcP").style.visibility = "hidden";
} if(userScore < pcScore) {
   livesCount();
   enemyPointInc();
  document.getElementById("bottomUserR").style.visibility = "hidden";
  document.getElementById("bottomUserP").style.visibility = "visible";
  document.getElementById("bottomUserS").style.visibility = "hidden";
  document.getElementById("bottomPcR").style.visibility = "hidden";
  document.getElementById("bottomPcS").style.visibility = "visible";
  document.getElementById("bottomPcP").style.visibility = "hidden";
}
if(userScore == pcScore){
document.getElementById("bottomUserR").style.visibility = "hidden";
document.getElementById("bottomUserP").style.visibility = "visible";
document.getElementById("bottomUserS").style.visibility = "hidden";
document.getElementById("bottomPcR").style.visibility = "hidden";
document.getElementById("bottomPcP").style.visibility = "visible";
document.getElementById("bottomPcS").style.visibility = "hidden";
}
landTheRocket()
}
 


//what will happen when scissors button is clicked
function scissorsClicked(){
   let pcScore = Math.floor(Math.random()*3);
   let userScore = Math.floor(Math.random()*3);
   console.log(pcScore)
   console.log(userScore)

if (userScore > pcScore) {
  UserScoreInc()
  document.getElementById("bottomUserR").style.visibility = "hidden";
  document.getElementById("bottomUserP").style.visibility = "hidden";
  document.getElementById("bottomUserS").style.visibility = "visible";
  document.getElementById("bottomPcR").style.visibility = "hidden";
  document.getElementById("bottomPcS").style.visibility = "hidden";
  document.getElementById("bottomPcP").style.visibility = "visible";
} if(userScore < pcScore) {
   livesCount();
  enemyPointInc();
  document.getElementById("bottomUserR").style.visibility = "hidden";
  document.getElementById("bottomUserP").style.visibility = "hidden";
  document.getElementById("bottomUserS").style.visibility = "visible";
  document.getElementById("bottomPcR").style.visibility = "visible";
  document.getElementById("bottomPcS").style.visibility = "hidden";
  document.getElementById("bottomPcP").style.visibility = "hidden";
}



if(userScore == pcScore){
document.getElementById("bottomUserR").style.visibility = "hidden";
document.getElementById("bottomUserP").style.visibility = "hidden";
document.getElementById("bottomUserS").style.visibility = "visible";
document.getElementById("bottomPcR").style.visibility = "hidden";
document.getElementById("bottomPcP").style.visibility = "hidden";
document.getElementById("bottomPcS").style.visibility = "visible";
}
landTheRocket()

}
 



