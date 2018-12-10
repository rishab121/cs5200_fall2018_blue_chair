// Populate reviews for restaurant with default user
// uses yelp-fusion-api wrapper to fetch results from yelp

// Note: I already populated the DB,  do not run it again
const Review = require("../models/Review.schema.server");
const Restaurant = require("../models/Restaurant.schema.server");
const User = require("../models/User.schema.server");
const yelp = require("yelp-fusion");
var sleep = require("sleep");
const _ = require("underscore");
// To set environment variable do "export API_KEY=value" in terminal
const API_KEY = process.env.API_KEY;
const client = yelp.client(API_KEY);
const userIdArray = [
  "5c0c263fc78e0c5c4b80052b",
  "5c09c9feeb7e3f1816f68638",
  "5c09ca67eb7e3f1816f6863e",
  "5c0c4e1be7ca556b2fa19be9",
  "5c09cd35592493188a5e86b2",
  "5c0c8f99ffca42810a9b2d8d",
];

async function createDefaultYelpuser() {
  let yelpUser = {
    _id: "5c01e4265c2ce02c1f8ce6d5",
    username: "yelp-user",
    email: "default@yelp.com",
    password: "$2a$10$nSbVwuCJQRTPvacF0sP0ounk9kefGig9cV6K4eFd7lv.iwRgNJZSO",
    address: {
      streetaddress: "123",
      city: "abc",
      state: "abc",
      country: "abc",
      zipcode: 123
    },
    phone: 123456789,
    userType: "REGISTERED"
  };
  const user = await User.create(yelpUser);
  console.log(user);
}

async function populateReviews() {
  console.log("function called");
  await Review.remove({});
  var restaurants = await Restaurant.find();
  for (const restaurant of restaurants) {
    try {
      console.log("in function now it will make a call to api");
      sleep.sleep(1);
      const result = await client.reviews(restaurant.id);
      console.log("result received");
      const yelpReviews = result.jsonBody.reviews;
      //console.log(result);
      console.log(yelpReviews);
      // process.exit();
      for (const review of yelpReviews) {
        try {
          console.log("inside here");
          let yelpUserId = _.sample(userIdArray);
          const newReview = new Review({
            user: yelpUserId,
            restaurant: restaurant._id,
            rating: review.rating,
            text: review.text,
            time_created: review.time_created,
            url: review.url,
            yelp_review: true
          });
          newReview.validate();
          await newReview.save();
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

// Note to self: Never use async/await in higher order functions

module.exports = {
  createDefaultYelpuser,
  populateReviews
};
