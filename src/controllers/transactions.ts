import Transactions from '../models/transactions';
import { iTransaction } from '../../types';

// add transactions
export async function addTransaction(transactionObj: iTransaction) {
  const transaction = new Transactions(transactionObj);

  return transaction.save();
}
