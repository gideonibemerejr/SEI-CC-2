const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

<<<<<<< HEAD
=======
const reviewSchema = new Schema(
  {
    content: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  },
  { timestamps: true }
);

>>>>>>> c3fa2c1a21d87f17269505844c66bcdb8d525ec9
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    releaseYear: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 1927
    },
    mpaaRating: {
      type: String,
      enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [String],
<<<<<<< HEAD
    nowShowing: { type: Boolean, default: true }
=======
    nowShowing: { type: Boolean, default: true },
    reviews: [reviewSchema]
>>>>>>> c3fa2c1a21d87f17269505844c66bcdb8d525ec9
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Movie', movieSchema);
