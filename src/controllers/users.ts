import Users from '../models/users';
import { iUser } from '../../types';

export async function addUser(userObj: iUser) {
  const existingUser = await Users.find({
    email: userObj.email,
    userName: userObj.userName,
  });

  if (existingUser.length !== 0) {
    throw Error(
      `User with username ${userObj.userName} or email ${userObj.email} already exists.`,
    );
  }

  const user = new Users(userObj);

  return user.save();
}

export async function removeUser(id: string) {
  return Users.findOneAndUpdate({ _id: id }, { deletedAt: new Date() });
}

// get a user
export async function getUser(id: string) {
  return await Users.findOne({ _id: id, deletedAt: null });
}

// get all users
export async function getAllUsers() {
  return await Users.find({});
}
