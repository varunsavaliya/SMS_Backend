import { Schema } from "mongoose";

export interface IAcademicTerm {
  name: string;
  description: string;
  duration: string;
  createdBy: Schema.Types.ObjectId;
}
