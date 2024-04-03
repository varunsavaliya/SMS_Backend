import { Schema, model } from "mongoose";

const academicYearSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fromYear: {
      type: Date,
      required: true,
    },
    toYear: {
      type: Date,
      required: true,
    },
    isCurrent:{

        type: Boolean,
        default: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    duration: {
      type: String,
      required: true,
      default: "3 months",
    },
  },
  {
    timestamps: true,
  }
);

const AcademicYear = model("AcademicYear", academicYearSchema);

export default AcademicYear;
