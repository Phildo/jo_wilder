var quiz0 = {
  quizn: 0,
  questions: [
    {
      q: "Is English the first language you learned?",
      a: [
        "Yes",
        "No"
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "How well do you read in English?",
      a: [
        "Not a very Good Reader",
        "An OK Reader",
        "Very Good Reader"
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "Do you Enjoy reading in English?",
      a: [
        "Really Enjoy",
        "Enjoy",
        "It's OK",
        "Do Not Enjoy"
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
  ],
};

var quiz2 = {
  quizn: 2,
  questions: [
    {
      q: "The game grabs my attention.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I like watching TV shows about history.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "Jo is friendly.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I think Jo is funny.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
  ],
};
var quiz3 = {
  quizn: 3,
  questions: [
    {
      q: "Jo says things that make me laugh.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I forget about time passing while playing the game.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I like researching about history.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I like Jo.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
  ],
};
var quiz4 = {
  quizn: 4,
  questions: [
    {
      q: "Jo is kind.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "Jo says funny things.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I forget what's around me while playing the game.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I like learning history very much.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
  ],
};
var quiz5 = {
  quizn: 5,
  questions: [
    {
      q: "I think learning history is fun.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "Jo is approachable.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "Jo is entertaining.",
      a: [
        "Disagree",
        "Somewhat Disagree",
        "Neutral",
        "Somewhat Agree",
        "Agree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
    {
      q: "I feel emotionally involved in the game.",
      a: [
        "Agree",
        "Somewhat Agree",
        "Neutral",
        "Somewhat Disagree",
        "Disagree",
      ],
      response: -1,
      aclick: [], //IGNORE- WILL BE AUTOGENERATED
    },
  ],
};




var reset_quiz = function (quiz) {
  for (var i = 0; i < quiz.questions.length; i++) {
    var q = quiz.questions[i];
    q.response = -1;
  }
}
var gen_callbacks = function (quiz) {
  for (var i = 0; i < quiz.questions.length; i++) {
    var q = quiz.questions[i];
    for (var j = 0; j < q.a.length; j++)
      q.aclick[j] = (function (i, selection) {
        return function () {
          quiz.questions[i].response = selection;
          log_quizquestion_type_data = my_logger.get_quizquestion_type_data(quiz, i);
          log_quizquestion_subtype_data = my_logger.get_quizquestion_subtype_data();
          log_data = my_logger.get_log_data(LOG_TYPE_QUIZQUESTION, 
            log_quizquestion_type_data, LOG_SUBTYPE_BASIC, 
            log_quizquestion_subtype_data);
          my_logger.send_log(log_data);
          // if (quiz.questions[i].response == selection) {
          //   // if player re-clicks, deselect.
          //   quiz.questions[i].response = -1;
          // }
          // else {
          //   // else, select newly chosen item.
          //   quiz.questions[i].response = selection;
          // }
        }
      })(i, j); //javascript is ridiculous
  }
}
var log_quiz = function (quiz) {
  log_quiz_type_data = my_logger.get_quiz_type_data(quiz);
  log_quiz_subtype_data = my_logger.get_quiz_subtype_data();
  log_data = my_logger.get_log_data(LOG_TYPE_QUIZ, log_quiz_type_data, LOG_SUBTYPE_BASIC, log_quiz_subtype_data);
  my_logger.send_log(log_data);

}
gen_callbacks(quiz0);
gen_callbacks(quiz2);
gen_callbacks(quiz3);
gen_callbacks(quiz4);
gen_callbacks(quiz5);

var quiz = quiz0;
