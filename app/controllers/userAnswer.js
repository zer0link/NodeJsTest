'use strict';
// const User = require('./../models/user')
const UserAnswer = require('./../models/userAnswer')


class UserAnswerController{
    constructor(app){
        this._app = app;
    }

    register(userQuestionAnswer){
        let userAnswer = new UserAnswer()
        userAnswer.Find({email:userQuestionAnswer.userEmail})
        .then((ua) => {
            ua.answer.push({
                questionId: userQuestionAnswer.questionId,
                answer: userQuestionAnswer.answer
            })
            return ua.save()
        })

        return data.save()
    }

    getUser(email){
        let user = new User(app)
        return user.find({email})
    }
}

module.exports = UserAnswerController