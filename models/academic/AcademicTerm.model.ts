import { Schema, model } from "mongoose";
import { IAcademicTerm } from "../../entitites/interfaces/academic.interface";

const academicTermSchema: Schema<IAcademicTerm> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      default: "3 months",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicTerm = model("AcademicTerm", academicTermSchema);

export default AcademicTerm;
