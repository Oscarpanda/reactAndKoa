const mongoos = require("mongoose");
const Db_Url = "mongodb://localhost:27017/test1";
mongoos.connect(Db_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoos.connection.on("connected", function(data) {
  console.log('Mongoose connection open to ' + Db_Url);
})
mongoos.connection.on("error", function(data) {
  console.log('Mongoose connection error ' + data);
})
mongoos.connection.on("disconnected", function(data) {
  console.log('Mongoose dosconnection  ' + data);
})
module.exports = mongoos;