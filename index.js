require('./dataBase/mongooseConfig');
const express = require('express');
const usersRouter = require('./routs/usersRouts');

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use('/api/users', usersRouter);


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})