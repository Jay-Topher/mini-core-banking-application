import { Router } from 'express';
import { addUser } from '../controllers/users';
import { iUser, iAccount } from '../../types';
import { addBvn } from '../controllers/bvn';
import { openAccount } from '../controllers/accounts';

const router = Router();

// let users: iUser[] = [];

// router.get('/', (_req, res) => {
//   res.status(200).json({ users });
// });

// Open an account
router.post('/signup', async (req, res) => {
  const {
    lastName,
    firstName,
    email,
    phoneNumber,
    password,
    userName,
    accountType,
  } = req.body;
  const { bvn } = req.body;

  const newUser: iUser = {
    lastName,
    firstName,
    email,
    phoneNumber,
    password,
    userName,
    isVerified: false,
  };

  // users = users.concat(newUser);
  try {
    const doc = await addUser(newUser);
    const newBvn = await addBvn({ userId: doc._id, bvn });
    const accountDetails: iAccount = {
      bvnId: newBvn._id,
      accountType,
      accountName: `${lastName} ${firstName}`,
      userId: doc._id,
      accountNumber: '20' + Math.trunc(Math.random() * 100000000).toString(10),
      accountBalance: 0,
    };

    const newAccount = await openAccount(accountDetails);

    res.status(200).json({ data: doc.toJSON(), newBvn, newAccount });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default router;
