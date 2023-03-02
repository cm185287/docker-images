const { MongoClient } = require("mongodb");
const client = new MongoClient("test")
console.log(client)
console.log("Hello world 2")