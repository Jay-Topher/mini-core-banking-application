import { Router } from 'express';

const router = Router();

type iUser = {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  nin: string;
  dob: string;
  password: string;
  username: string;
};

let users: iUser[] = [];

router.get('/', (_req, res) => {
  res.status(200).json({ users });
});

// Open an account
router.post('/signup', (req, res) => {
  const {
    lastName,
    firstName,
    email,
    phoneNumber,
    nin,
    dob,
    password,
    username,
  } = req.body;

  const newUser: iUser = {
    lastName,
    firstName,
    email,
    phoneNumber,
    nin,
    dob,
    password,
    username,
  };

  users = users.concat(newUser);

  res.status(200).json({ message: 'Contact added successfully' });
});

export default router;
