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
