import mongoose from "./config";
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

export default todoList;
