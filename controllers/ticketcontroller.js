const mongoose = require("mongoose");
const ticketModule = require("../Module/ticket");

async function addticket(req, res) {
  console.log(req.body);
  try {
    const newticket = ticketModule(req.body);
    await newticket.save();
    res.status(201).send({ message: "Ticket created Sucessfully", newticket });
  } catch (error) {
    res.status(500).send(error);
  }
}

// http://localhost:5000/api/addticket

/*
{
  "ticket_id":"123456",
  "ticket_type":"Finance",
  "status":"Pending",
  "title":"No",
  "description":"Hello!!"
  "due_date":"Monday",
  "allocated_id":456789,
  "remarks":"Excellent",
  "createdBy":"Arabaj",
  "modifiedBy":"admin",
  "createdAt":"2024-12-11T18:30:00.000+00:00",
  "modifiedAt":"2024-12-11T18:30:00.000+00:00"
  
}
 */
async function getalluser(req, res) {
  try {
    const newuser = await userModule.find();
    return res.send(newuser);
    res.status(201).send({ message: "Ticket created Sucessfully", newuser });
  } catch (error) {
    return res.status(500).send(error);
  }
}
// http://localhost:5000/api/getalluser

async function deleteuser(req, res) {
  try {
    const userId = req.params.id;
    const deleteuserByid = await userModule.findByIdAndDelete(userId);
    if (!deleteuserByid) {
      res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket Deleted" });
  } catch (error) {
    console.error("Error deleting Ticket", err);
    res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
}
// http://localhost:5000/api/updateuser
async function updateuser(req,res){
  try {
    const userId = req.params.id;
    const updateuserByid = await userModule.findByIdAndUpdate(userId, req.body, {
      new: true,
      });
      if (!updateuserByid) {
        res.status(404).json({ message: "Ticket not found" });
        }
        res.status(200).json({ message: "Ticket Updated" });
        }catch(error){
          console.error("Error updating Ticket", err);
          res
          .status(500)
        
        }
  }
// http://localhost:5000/api/deleteuser/66743cd11c95a6095c6878f6

async function updateuser(req, res) {
  try {
    const { id } = req.params;
    const { designation } = req.body;

    if (!["Ticket", "Admin"].includes(designation)) {
      return res.status(400).json({ message: "Invalid designation" });
    }
    const updateuser = await userModule.findByIdAndUpdate(id, { designation });
    if (!updateuser) {
      res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).send(updateuser);
  } catch (error) {
    console.error("Error updating ticket", error);
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: "validation error", err: error.message });
    } else if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Invalid ticket id", err: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", err: error.message });
    }
  }
}

module.exports = {
  adduser,
  getalluser,
  deleteuser,
  updateuser,
};
