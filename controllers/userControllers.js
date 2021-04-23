const User = require('../models/userScheme');


const deleteUserAcount = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({user_id: req.params.user_id});
    return user ? res.send(user) :  res.status(404).send();
  }
  catch (e) {
    res.status(500).send()
  }
}


module.exports = {
  deleteUserAcount,
}