const mongoose = require("./config");
let todoListSchema = mongoose.Schema({
  name: String,
  ListContent: String,
  id: String,
  completed: {
    type: Boolean,
    default: false,
  },
  updated: {
    type: Date,
    default: Date.now
  }
})
let todoList = mongoose.model("todoList", todoListSchema);

module.exports =  todoList;
