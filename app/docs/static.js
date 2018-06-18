const express = require('express');
const path = require('path');

const static = (app) => {
    console.log(__dirname); 
    app.use('/docs', express.static(__dirname))
    app.get('/docs/user', (req, res) => {
        res.sendFile(path.join(__dirname + '/user.html'));
    });
    app.get('/docs/useranswer', (req, res) => {
        res.sendFile(path.join(__dirname + '/useranswer.html'));
    });
    app.get('/docs/question', (req, res) => {
        res.sendFile(path.join(__dirname + '/question.html'));
    });

}

module.exports = static; 