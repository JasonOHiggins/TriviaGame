$("#start").on("click", function () {
    game.start();
})

$(document).on('click', "#over", function() {
    game.done();
})

var questions = [{
    question: "What is the world's fastest land animal",
    answers: ["Ostrich", "Hummingbird", "Cheetah", "Cougar"],
    correctAnswer: "Cheetah"
}, {
    question: "In which country is the Great Barrier Reef?",
    answers: ["India", "Japan", "Brazil", "Australia"],
    correctAnswer: "Australia"
}, {
    question: "In which galaxy do we live?",
    answers: ["The Milky Way", "Mars", "Tesco", "Snickers"],
    correctAnswer: "The Milky Way"
}, {
    question: "What is the smallest breed of dog?",
    answers: ["Poodle", "Chihuahua", "Pug", "Scottish Terrier"],
    correctAnswer: "Chihuahua"
}, {
    question: "What country has the most people?",
    answers: ["United States of America", "India", "China", "Russia"],
    correctAnswer: "China"
}, {
    question: "What is the Little Mermaid's name?",
    answers: ["Katherine", "Ariel", "Julie", "Andrea"],
    correctAnswer: "Ariel"
}, {
    question: "Who was the teddy bear named after?",
    answers: ["Ted Kasinsky", "Ronald Paddington", "Theodore Roosevelt", "Winnie the Pooh"],
    correctAnswer: "Theodore Roosevelt"
}, {
    question: "What country has the largest area of land?",
    answers: ["Africa", "Canada", "China", "Russia"],
    correctAnswer: "Russia"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
            $("#start").remove();
            for (var i = 0; i < questions.length; i++) {
                $('#subwrapper').append('<h2>' + questions[i].question + "</h2>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $("#subwrapper").append("<input type ='radio'  name ='question-" + i + " ' value = '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
                }
            }
            $("#subwrapper").append('<br><br><button id="over">Done</button>');
        },
            done: function() {
                $.each($('input[name="question-0]":checked'), function () {
                    if ($(this).val() == questions[0].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-1]":checked'), function () {
                    if ($(this).val() == questions[1].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-2]":checked'), function () {
                    if ($(this).val() == questions[2].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-3]":checked'), function () {
                    if ($(this).val() == questions[3].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-4]":checked'), function () {
                    if ($(this).val() == questions[4].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-5]":checked'), function () {
                    if ($(this).val() == questions[5].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-6]":checked'), function () {
                    if ($(this).val() == questions[6].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-7]":checked'), function () {
                    if ($(this).val() == questions[7].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
               });

               this.result();
          },

          result: function(){
              clearInterval(timer);
              $("#subwrapper h2").remove();
              $("#subwrapper").html("<h2>Game Over!</h2>");
              $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
              $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
          }
        }