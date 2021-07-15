const getDb = require('../util/database').getDb;
const mongoObject = require('mongoDb');

const objectId = mongoObject.ObjectId;

class User {
  constructor(userName, email){
    this.userName = userName,
    this.email = email
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    return db.collection('users').find({id: new objectId(userId)}).next();
  }
}

module.exports = User;