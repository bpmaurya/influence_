const router = require("express").Router();
const userController = require("../controllers/userController");
const profileController = require("../controllers/profileController");
const { verifyUser} = require("../middleware/verifyToken");


router.post("/create", verifyUser, profileController.createProfile);

module.exports = router;