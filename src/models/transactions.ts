import mongoose from 'mongoose';

interface TransactionSchema extends mongoose.Document {
  transactionType: string;
  amount: number;
  previousAmount: number;
  currentAmount: number;
  from: string;
  to: string;
  createdAt: Date;
}

const transactionSchema = new mongoose.Schema(
  {
    transactionType: {
      type: String,
      enum: ['CREDIT', 'DEBIT'],
      default: null,
    },
    amount: Number,
    previousAmount: Number,
    currentAmount: Number,
    from: String,
    to: String,
  },
  { timestamps: true },
);

export default mongoose.model<TransactionSchema>(
  'Transactions',
  transactionSchema,
);
