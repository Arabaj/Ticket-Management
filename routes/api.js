const express = require("express");
const router = express.Router();

const userModel = require("../controllers/usercontroller");

// User data
router.post("/adduser", userModel.adduser);
router.get("/getalluser", userModel.getalluser);
router.delete("/deleteuser/:id", userModel.deleteuser);
router.put("/updateuser/:id", userModel.updateuser);

module.exports = router;
