'use strict';
const {getAll,find, post} = require('./base')

module.exports.getAll = (db) => {
    return getAll(db, 'question')
}

module.exports.find = (db, query) => {
    return find(db, 'question', query)
}

module.exports.post = (db, question) => {
    const value = Object.assign({timeStamp : Date.now()},question)
    return post(db, 'question', value)
}