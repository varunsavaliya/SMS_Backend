import { Schema, model } from "mongoose";

const programSchema = new Schema(
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
      default: "4 years",
    },
    code: {
      type: String,
      default: function () {
        return (
          this.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase() +
          Math.floor(10 + Math.random() * 90) +
          Math.floor(10 + Math.random() * 90)
        );
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Program = model("Program", programSchema);

export default Program;
