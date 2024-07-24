const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  ticket_id: {
    type: Number,
    require: false,
  },
  ticket_type: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  due_date: {
    type: Number,
    require: false,
  },
  allocated_id: {
    type: String,
    require: false,
  },
  remarks:{
    type:String,
    require:false
  },
  createdBy: {
    type: String,
    require: false,
  },
  modifiedBy: {
    type: String,
    require: false,
  },
  createdAt: {
    type: Date,
    require: false,
  },
  modifiedAt: {
    type: Date,
    require: false,
  },
});
module.exports = mongoose.model("ticket", ticketSchema);
