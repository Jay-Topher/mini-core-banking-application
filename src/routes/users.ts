import { Router } from 'express';
import { addUser, getUser, getAllUsers } from '../controllers/users';
import { iUser, iAccount } from '../../types';
import { addBvn } from '../controllers/bvn';
import { openAccount } from '../controllers/accounts';
import { loginAdmin } from '../controllers/admin';

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

router.post('/admin/login', async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).json({ message: 'Invalid username or password' });

    return;
  }

  try {
    const doc = await loginAdmin(userName, password);
    const { status, message, payload, token } = doc;
    res.status(status).json({ message, payload, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get single user
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await getUser(id);

    if (!doc) {
      res.status(400).json({ message: 'User not found' });

      return;
    }

    res.status(200).json(doc);
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get all users
router.get('/', async (_req, res) => {
  try {
    const doc = await getAllUsers();

    if (!doc) {
      res.status(404).json({ message: 'users not found' });

      return;
    }

    return res.status(200).json({ doc });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
