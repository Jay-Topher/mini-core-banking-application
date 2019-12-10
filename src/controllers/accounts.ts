import Accounts from '../models/accounts';
import { iAccount } from '../../types';

// open an account
export async function openAccount(accountObj: iAccount) {
  const existingAccount = await Accounts.find({
    accountNumber: accountObj.accountNumber,
  });

  if (existingAccount.length !== 0) {
    throw Error(
      `An account with number ${accountObj.accountNumber} already exists.`,
    );
  }

  const account = new Accounts(accountObj);

  return account.save();
}
