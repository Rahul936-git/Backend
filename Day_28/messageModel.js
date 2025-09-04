import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    role: { type: String, enum: ["user", "model"], required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
