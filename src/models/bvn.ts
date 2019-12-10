import mongoose from 'mongoose';

interface BvnSchema extends mongoose.Document {
  userId: string;
  bvn: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const bvnSchema = new mongoose.Schema(
  {
    userId: String,
    bvn: String,
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export default mongoose.model<BvnSchema>('Bvn', bvnSchema);
