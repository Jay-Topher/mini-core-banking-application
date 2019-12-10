import mongoose from 'mongoose';

interface AdminSchema extends mongoose.Document {
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const adminSchema = new mongoose.Schema(
  {
    userName: { type: String, index: true },
    email: String,
    password: String,
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export default mongoose.model<AdminSchema>('Admin', adminSchema);
