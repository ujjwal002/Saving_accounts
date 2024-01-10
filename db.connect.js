import mongoose from "mongoose";

export const connect =  () => {
  console.log(mongoose);
  if (mongoose.connection.readyState[0]) return;
  mongoose.connect(process.env.MONGODB_URI);
};
