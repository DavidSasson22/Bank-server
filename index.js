require('./dataBase/mongooseConfig');
const express = require('express');
const cors = require('cors')
const usersRouter = require('./routs/usersRouts');
const userRouter = require('./routs/userRouts');

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use('/api/users', usersRouter);
app.use('/api/users', userRouter);


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})