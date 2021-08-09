const Profile = require('../models/profileModel');
const {cloudinary} = require("../utils/cloudinary");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const User = require("../models/userModel");

exports.createProfile = async (req, res, next) => {
    try {
      const fileStr = req.files.photo
      const uploadResponse = await cloudinary.uploader.upload(fileStr.tempFilePath)
      console.log(uploadResponse)
      console.log(fileStr)
      console.log(req.body.userId)
      const newProfile = {
        user: req.body.userId,
        profileImage:uploadResponse.secure_url,
      }

      const profile = await Profile.create(newProfile);
      return res
        .status(200)
        .send({ message: "Profile created successfully!", profile });
    } catch (err) {
      return res
        .status(400)
        .send({ error: "Profile not-created successfully!", error: err });
    }
  };

  exports.getProfile = async function (req,res){
    try{

    }
    catch(err){
      console.log(err);
    }
  }