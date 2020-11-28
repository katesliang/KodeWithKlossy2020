var submit = $(".submit-btn");
var container = $('.container')

submit.on("click", displayResults)

function displayResults(){
  event.preventDefault();
  var name = $(".name");
  var score = 0;
  var question1adam = $('.q1adam');
  var question1barron = $('.q1barron');
  var question2 = $('.q2ans');
  var question3 = $('.q3ans');
  var question4 = $('.q4ans');
  var question5 = $('.q5ans');
  if(question1adam.is(':checked') && question1barron.is(':checked')){
    score++;
  }
  if(question2.is(':checked')){
    score++;
  }
  if(question3.val() === "2020-11-13"){
    score++;
  }
  if(question4.val().toLowerCase() === "bei feng xiao xiao"){
    score++;
  } 
  if(question5.is(':checked')){
    score++;
  }
  if(score >= 3){
    container.append(`<p> Congrats, ${name.val()}! You are on the elite side of tiktok! </p>
    <p> Your total score was ${score} out of 5. </p>`);
  }
  else{
    container.append(`<p> Sorry, ${name.val()}! You are not on alt tiktok! </p>
    <p> Your total score was ${score} out of 5. </p>`);
  }
}