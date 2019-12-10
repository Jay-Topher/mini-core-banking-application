import mongoose from 'mongoose';

interface AccountSchema extends mongoose.Document {
  bvnId: string;
  userId: string;
  accountName: string;
  accountType: string;
  accountNumber: string;
  accountBalance: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const accountSchema = new mongoose.Schema(
  {
    bvnId: String,
    userId: String,
    accountName: String,
    accountType: {
      type: String,
      enum: ['CURRENT', 'FIXED DEPOSIT', 'SAVINGS'],
      default: null,
    },
    accountNumber: { type: String, unique: true },
    accountBalance: Number,
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<AccountSchema>('Accounts', accountSchema);
