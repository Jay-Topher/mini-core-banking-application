interface UserSchema extends mongoose.Document {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  dob: string;
  nin: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
