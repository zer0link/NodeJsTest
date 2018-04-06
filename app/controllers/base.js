module.exports.getAll = (db, topic) => {
    return db.collection(topic).find({}).toArray();      
}

module.exports.find1 = (db, topic, query) => {
    return db.collection(topic).find(query).toArray();      
}

module.exports.post = (db, topic, entity) => {
    return db.collection(topic).save(entity)
}
