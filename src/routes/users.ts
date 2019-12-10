import { Router } from 'express';
import { openAccount } from '../controllers/users';
import { iUser } from '../../types';

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
  } = req.body;

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
    const doc = await openAccount(newUser);

    res.status(200).json({ data: doc.toJSON() });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default router;
