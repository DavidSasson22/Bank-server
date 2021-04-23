const User = require('../models/userScheme');
const express = require('express');


const createNewUser = async (req, res) => {
  const { firstName, lastName, user_id, isActive, cash, credit } = req.body;
  const user = new User({ firstName, lastName, user_id, isActive, cash, credit });
  try {
    await user.save();
    res.status(201).send(user);
  }
  catch (e) {
    res.status(400).send(e);
  }
}


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  }
  catch (e) {
    res.status(500).send(e);
  }
}


const deleteUserAcount = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ user_id: req.body.user_id})
    res.status(200).send(user)
  }
  catch (e) {
    res.status(500).send(e);
  }
}


module.exports = {
  createNewUser,
  getAllUsers,
  deleteUserAcount,
}