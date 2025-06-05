import { Schema, model, models, Document } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  email: string;
  password: string;
  salt: string;
}

const AdminSchema = new Schema<IAdmin>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
});

export const Admin = models.Admin || model<IAdmin>("Admin", AdminSchema);
