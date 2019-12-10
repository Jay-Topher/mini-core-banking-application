import Bvn from '../models/bvn';
import { iBvn } from '../../types';

// Add BVN
export async function addBvn(bvnObj: iBvn) {
  const existingBvn = await Bvn.find({
    bvn: bvnObj.bvn,
  });

  if (existingBvn.length !== 0) {
    throw Error('This BVN is already taken');
  }

  const bvn = new Bvn(bvnObj);

  return bvn.save();
}
