import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

interface UserSchema extends mongoose.Document {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    userName: { type: String, index: true },
    email: String,
    phoneNumber: String,
    password: String,
    isVerified: Boolean,
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

userSchema.pre<UserSchema>('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

export default mongoose.model<UserSchema>('Users', userSchema);
