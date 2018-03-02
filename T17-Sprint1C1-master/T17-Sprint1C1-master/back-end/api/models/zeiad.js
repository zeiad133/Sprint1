var mongoose = require('mongoose');

var ZeiadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    sellername: {
        type: String,
        trim: true,
        lowercase: true
    },
});

mongoose.model('Zeiad', ZeiadSchema);
