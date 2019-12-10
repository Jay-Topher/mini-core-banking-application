export type iUser = {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  userName: string;
  isVerified: boolean;
};

export type iAccount = {
  bvnId: string;
  accountType: string;
  accountNumber: string;
  accountName: string;
  userId: string;
  accountBalance: number;
};

export type iBvn = {
  userId: string;
  bvn: string;
};

export type iTransaction = {
  transactionType: string;
  amount: number;
  previousAmount: number;
  currentAmount: number;
  from: string;
  to: string;
};

export type iAdmin = {
  userName: string;
  email: string;
  password: string;
};
