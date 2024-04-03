import { Schema, model } from "mongoose";

const yearGroupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    academicYear: {
      type: Schema.Types.ObjectId,
      ref: "AcademicYear",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//model
const YearGroup = model("YearGroup", yearGroupSchema);

module.exports = YearGroup;
