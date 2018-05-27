'use strict';
const UserAnswer = require('./../models/userAnswer');
const Question = require('./../models/question');
const q = require('q');

class UserAnswerController{

    getNext(userEmail){
        let deferred = q.defer();
        UserAnswer.findOne({userEmail})
        .then((ua) => {
            if(!ua){
                Question.findOne()
                .then(question => {
                    deferred.resolve(question);
                })
            }
            else{
                Question.find()
                .then((questions) => {

                    for (let index = 0; index < questions.length; index++) {
                        const question = questions[index];
                        if(!ua.answers.find(x => x.questionId == question._id)){
                            deferred.resolve(question);
                        }
                    } 
                })
            }
        })
        return deferred.promise;
    }

    submit(userQuestionAnswer){
        let deferred = q.defer();
        UserAnswer.findOne({userEmail:userQuestionAnswer.userEmail})
        .then((ua) => {
            if(!ua){
                ua = new UserAnswer();
                ua.userEmail = userQuestionAnswer.userEmail;
            }
            ua.answers.push({
                questionId: userQuestionAnswer.questionId,
                answer: userQuestionAnswer.answer
            })
            ua.save()
            .then(ua => {
                deferred.resolve(ua);
            });
        })

        return deferred.promise;
    }
}

module.exports = UserAnswerController;