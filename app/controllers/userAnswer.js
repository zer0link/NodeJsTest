'use strict';
const UserAnswer = require('./../models/userAnswer');
const Question = require('./../models/question');


class UserAnswerController{

    getNext(userEmail){
        return UserAnswer.findOne({userEmail})
        .then((ua) => {
            if(!ua){
                return Question.findOne()
                .then(question => {
                    return question;
                })
            }
            else{
                return Question.find()
                .then((questions) => {

                    for (let index = 0; index < questions.length; index++) {
                        const question = questions[index];
                        if(!ua.answers.find(x => x.questionId == question._id)){
                            return question;
                        }
                    } 
                })
            }
        })
    }

    submit(userQuestionAnswer){
        return UserAnswer.findOne({userEmail:userQuestionAnswer.userEmail})
        .then((ua) => {
            if(!ua){
                ua = new UserAnswer();
                ua.userEmail = userQuestionAnswer.userEmail;
            }
            ua.answers.push({
                questionId: userQuestionAnswer.questionId,
                answer: userQuestionAnswer.answer
            })
            return ua.save();
        })
    }
}

module.exports = UserAnswerController;