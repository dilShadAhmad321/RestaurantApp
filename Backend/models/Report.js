import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    report: {
      type: String,
      required: true,
    },
  },
  
  { timestamps: false }
);

export default mongoose.model("report_list", reportSchema);
