'use strict';
const Question = require('./../models/question');

class QuestionController{
    
    getAll(){
        return Question.find({});
    }

    postAll(questions){
        return questions.forEach(question => {
            let data = Object.assign(new Question(), question);
            data.save();
        });
    }

    post(question){
        let data = Object.assign(new Question(), question);
        console.log(data);
        return data.save();
    }
}

module.exports = QuestionController;