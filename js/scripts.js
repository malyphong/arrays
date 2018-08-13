$(document).ready(function() {
  $('#favorites').submit(function(event) {
    var questions = ['question1', 'question2', 'question3', 'question4', 'question5']

    questions.forEach(function(question) {
      var answers = $("input#" + question).val();
      $("." + question).text(answers);
    });

  $('#output').show();

  event.preventDefault();
  });
});



// var que1 = $('input#question1').val();
// var que2 = $('input#question2').val();
// var que3 = $('input#question3').val();
// var que4 = $('input#question4').val();
// var que5 = $('input#question5').val();
//
// var answers = [que1, que2, que3, que4, que5];
//
// var three = [answers.push(answers[4])];
//
// $('#answers').text(answers);
// $('#2favorites').text(answers[0], " and ", answers[1]);
// $('#3favorites').text(answers);
//
// $("#que1").text(answers[0]);
// $("#que2").text(answers[1]);
// $("#que3").text(answers[2]);
// $("#que4").text(answers[3]);
// $("#que5").text(answers[4]);
// $("#que6").text(answers[5]);
