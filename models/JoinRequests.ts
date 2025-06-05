import { Schema, Document, models, model } from "mongoose";

export interface IJoinRequest extends Document {
  fullName: string;
  contactNumber: number;
  email: string;
  canadianCitizen: string;
  licenseType: string;
  visaType: string;
  startDate: Date;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const JoinRequestSchema = new Schema<IJoinRequest>(
  {
    fullName: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    email: { type: String, required: true },
    canadianCitizen: { type: String, required: true },
    licenseType: { type: String, required: true },
    visaType: { type: String, required: true },
    startDate: { type: Date, required: true },
    availability: {
      monday: { type: Boolean, required: true },
      tuesday: { type: Boolean, required: true },
      wednesday: { type: Boolean, required: true },
      thursday: { type: Boolean, required: true },
      friday: { type: Boolean, required: true },
      saturday: { type: Boolean, required: true },
      sunday: { type: Boolean, required: true },
    },
  },
  {
    timestamps: true,
  }
);

// Avoid model overwrite issue in dev
export const JoinRequest =
  models.JoinRequest || model<IJoinRequest>("JoinRequest", JoinRequestSchema);
