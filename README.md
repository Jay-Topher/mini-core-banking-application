# Mini-Core Banking App with Typescript

[![CircleCI](https://circleci.com/gh/bondz/node-express-react-ts.svg?style=svg)](https://circleci.com/gh/bondz/node-express-react-ts)

Clone the repository

Run the server with

```bash
yarn
yarn start
```

---

Then run the client

```bash
cd client
yarn
yarn start
```

---

You can choose to create an offline or online database but it has to be indicated in bin/www

```javascript
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
```

---

- API Endpoints

  - Create Account

  `/api/v1/users/signup method: 'POST'`

  - Close Account

  `/api/v1/users/signup method: 'PATCH'`

  - Get a user

  `/api/v1/users/:id method: 'GET'`

  - Get all users

  `/api/v1/users method: 'GET'`

  - Admin Login

  `/api/v1/users/admin/login method: 'POST'`

The client side was generated using `create-react-app`
