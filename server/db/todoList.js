const mongoose = require("./config");
let todoListSchema = mongoose.Schema({
  name: String,
  ListContent: String,
  updated: {
    type: Date,
    default: Date.now
  },
  listID: String,
})
let todoList = mongoose.model("todoList", todoListSchema);

module.exports =  todoList;
