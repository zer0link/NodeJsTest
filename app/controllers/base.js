module.exports.getAll = (db, topic) => {
    return db.collection(topic).find({}).toArray();      
}

module.exports.find = (db, topic, query) => {
    return db.collection(topic).find(query).toArray();      
}

module.exports.post = (db, topic, entity) => {
    return db.collection(topic).insert(entity)
}