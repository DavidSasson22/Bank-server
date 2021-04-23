const mongoose = require('mongoose');
const validator = require('validator')


const userSchme = mongoose.model('Users-selection', {
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },

  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },

  user_id: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      validator.isNumeric(value)
    },
  },

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },

  cash: {
    type: Number,
    required: true,
    default: 0
  },

  credit: {
    type: Number,
    required: true,
    default: 5000
  },

  history: {
    default: {},
    deposit: {
      amount: {
        type: Number,
        min: 0,
      },
      date: {
        type: Date,
        required: false,
        unique: false,
      }
    },
    withdrawal: {
      amount: {
        type: Number,
        min: 0,
      },
      date: {
        type: Date,
        required: false,
        unique: false,
      }
    }
  }
})


module.exports = userSchme;