import { Schema, Document, models, model } from "mongoose";

export interface ISupportRequest extends Document {
  contact_reason: string;
  details: string;
  firstName: string;
  lastName: string;
  email: string;
  tracking_number: string;
  country: string;
  province: string;
  location: string;
  issue: string;
  createdAt: Date;
}

const SupportRequestsSchema = new Schema<ISupportRequest>(
  {
    contact_reason: { type: String, required: true },
    details: { type: String, required: true },
    firstName: { type: String, required: true, minlength: 3, maxlength: 50 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true },
    tracking_number: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    country: { type: String, required: true },
    province: { type: String, required: true },
    location: { type: String, required: true },
    issue: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Avoid model overwrite issues in Next.js dev
export const SupportRequest =
  models.SupportRequest ||
  model<ISupportRequest>("SupportRequest", SupportRequestsSchema);
