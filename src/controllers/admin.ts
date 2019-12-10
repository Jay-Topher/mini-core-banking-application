import Admin from '../models/admin';
import { iAdmin } from '../../types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Add an admin
export async function addAdmin(adminObj: iAdmin) {
  const existingAdmin = await Admin.find({
    $or: [{ userName: adminObj.userName }, { email: adminObj.email }],
  });

  if (existingAdmin.length !== 0) {
    throw Error('This username or email is not available');
  }

  const admin = new Admin(adminObj);

  return admin.save();
}

export async function loginAdmin(username: string, password: string) {
  const adminExists = await Admin.findOne({ username: username });
  if (!adminExists) {
    throw Error('Invalid username or password');
  }

  const comparePassword = await bcrypt.compare(password, adminExists.password);
  if (!comparePassword) {
    throw new Error('Invalid username or password ');
  }
  const token = jwt.sign(
    { userId: adminExists._id },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: '30m' },
  );
  return {
    status: 200,
    message: 'Login Succesful',
    payload: adminExists,
    token,
  };
}
