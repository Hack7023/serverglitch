import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  month: {
    type: String,
    required: true,
  },
  spinning: {
    type: Number,
    default: 100,
  },
  transportation: {
    type: Number,
    default: 100,
  },
  carding: {
    type: Number,
    default: 100,
  },
  heatingandcooling: {
    type: Number,
    default: 100,
  },
});
export default mongoose.model("sampledata", userSchema);
