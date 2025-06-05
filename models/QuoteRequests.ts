import { Schema, Document, model, models } from "mongoose";

export interface IQuoteRequest extends Document {
  firstName: string;
  lastName: string;
  email: string;
  contact_reason: string;
  delivery_reason: string;
  shipping_volume: string;
  contact_number: number;
  help: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
    },
    contact_reason: {
      type: String,
      required: true,
    },
    delivery_reason: {
      type: String,
      required: true,
    },
    shipping_volume: {
      type: String,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
      min: 1000000000, // 10-digit minimum
      max: 999999999999999, // 15-digit max
    },
    help: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Avoid model overwrite issues in dev
export const QuoteRequest =
  models.QuoteRequest ||
  model<IQuoteRequest>("QuoteRequest", QuoteRequestSchema);
