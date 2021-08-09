const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    profileImage: {
        type: String,
      },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
module.exports = mongoose.model("Profile", profileSchema);
