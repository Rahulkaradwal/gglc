// lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseGlobal | undefined;
}

const cached = (globalThis._mongoose ??= { conn: null, promise: null });

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log("mongodb is connected");
  return cached.conn;
}

export default dbConnect;
