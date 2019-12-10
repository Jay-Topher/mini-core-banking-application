import Admin from '../models/admin';
import { iAdmin } from '../../types';

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
