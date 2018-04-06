'use strict';
// const User = require('./../models/user')
const UserAnswer = require('./../models/userAnswer')


class UserAnswerController{
    constructor(app){
        this._app = app;
    }

    submit(userQuestionAnswer){
        // let userAnswer = new UserAnswer()
        return UserAnswer.findOne({userEmail:userQuestionAnswer.userEmail})
        .then((ua) => {
            if(!ua){
                ua = new UserAnswer()
                ua.userEmail = userQuestionAnswer.userEmail
            }
            ua.answers.push({
                questionId: userQuestionAnswer.questionId,
                answer: userQuestionAnswer.answer
            })
            return ua.save()
        })

    }

    getUser(email){
        let user = new User(app)
        return user.find({email})
    }
}

module.exports = UserAnswerController