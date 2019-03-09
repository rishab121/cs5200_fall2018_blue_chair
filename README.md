# cs5200_fall2018_blue_chair
Restaurant finder app heavily oriented on database

Welcome to the cs5200_fall2018_blue_chair wiki!

### DISABLE ADBLOCK before testing the application since ADBLOCK blocks our advertisement service created through Angular.
The project is deployed on the following URL: 
project NOTE: Use chrome or firefox to test the app online.

Website URL: http://restofinder.rishabmalik.info/

YouTube video URL: [https://www.youtube.com/watch?v=pTV2SE3GQOE&feature=youtu.be](https://www.youtube.com/watch?v=pTV2SE3GQOE&feature=youtu.be)

To run on localhost follow these steps:

0. **TURN OFF ADBLOCKER**
1. Keep the port 5000 free in order to run the app.
2. Clone this repository in any folder.
3. npm install in Restofinder for any required modules.
4. In every service, replace restofinder.rishabmalik.info with localhost:5000
5. In RestoFinder, run "node server.js"
6. Type in localhost:5000 in any web browser.

To get a general idea about the app watch the YouTube video.

# Description
## Problem Statement
There are millions of restaurants all around the world having different cuisine, having numerous reviews spread around the internet. Filtering through all this oceans and clutter of restaurants and reviews from different websites is quite a cumbersome task. There needs to be a platform which makes this task easy and fun to do.
## Proposed Solution
A web application which acts as a social platform for all the food lovers all around the world to search, browse, follow other users, get verified reviews of critics and create their own favourites list to go back to! There are a subset of users, critics who work for an organization and provide with the official reviews for the restaurants based on their expertise. Another subset of users which are owners are basically people who own the restaurants and claim a listing of restaurant as their own. There are also  The pre existing data that is possible to obtain such as restaurants, reviews, its location, etc. would be taken from the rich external database and API of Yelp Fusion.
## Potential Domain Objects
### 1. Restaurants
A restaurant is an object which contains the restaurant id, its name, rating, review_count etc.
### 2. Reviews
The review would consist of the name of the reviewer and the text containing the review of the restaurant being reveiwed.
### 3.Events
The events are created by an owner for the restaurant he owns. The event consists of a start time, end time, date, description, and ages.
### 4.Advertisements
The advertisements are created by an advertiser which are featured on the homepage. The advertisements consist of text, posted on, image_url, and url.

## Potential Human Users
### 1. Registered User
A registered user is a human user who has an account registered with our website and is logged in while browsing through it. A registered user has the ability to add restaurants to a list of favorites. He can also write reviews for the restaurants but these would not be verified as for the critic reviews. Members have access to their profiles, where they can change their profile information. A registered user can follow another registered user and also a critic.
### 2. Owner
An owner is a human user who is also a member of the website. He can claim a restaurant as his own. Although he wouldn't be able to edit or delete the reviews his restaurant has received. The owner may also endorse other owners while also have the capability to follow critics. The owner user can search for all the restaurants too though. The owner can list events for his restaurant.
### 3. Critic
A critic is a human user who is also a member of the website. He is associated with a company and all his reviews would have the company name too thus providing verification of his reviews. His reviews would look different than that of the registered user and would be placed higher up top in reviews section which would be done from the front end. The critic has the ability to endorse other owners and follow other critics. 

### 4. Advertiser
An advertiser is also a human user who is a member of the website. He is associated with a company and has a position in it. The advertiser needs to provide his credit card payment information while registering on the website before he can start posting his advertisements onto the site. He has the ability to post multiple advertisements on the site which would be featured on the homepage!

## User Goals
### 1. Registered User
	1. A registered user can write reviews and edit them.
	2. A registered user can add restaurants to a favorites list.
	3. A registered user can follow critics and other registered users.
### 2. Critic
	1. A reviewer can endorse the other owners.
	2. A reviewer can follow other critics.
	3. A reviewer can write a detailed review of a restaurant.
### 3. Owner
	1. An owner can claim a restaurant as his own.
	2. An owner can create events for his restaurant.
	3. An owner can also endorse other owners.
	4. An owner can follow critics.
### 4. Advertiser
        1. An advertiser can create an advertisement on the website.
        2. An advertiser can update his advertisement.
        3. An advertiser can delete his advertisement.
        4. An advertiser can retrieve his advertisement.
      

## User to User Relations
### 1. Registered User
	1. A registered user can follow critics and other users.
### 2. Critic
	1. A reviewer can endorse the other owners.
	2. A reviewer can follow other critics.
### 3. Owner
	1. An owner can also endorse other owners.
	2. An owner can follow critics.

## User to Domain Object Relations
### 1. Registered User
	1. A registered user can add Restaurants to favorites.
	2. A registered user can create favorites.
	3. A registered user can perform CRUD operations on his reviews.
	4. A registered user can see others' reviews.
### 2. Critic
	1. A critic can perform CRUD operations on his own reviews.
	2. A critic can view other reviews.
	3. A critic can search for restaurants.
### 3. Owner
	1. An owner can claim a restaurant as his own.
	2. An owner can read the reviews given to his own restaurants.
        3. An owner can perform CRUD operations on his Events.

### 4. Advertiser
        1. An advertiser can perform CRUD operations on advertisements.

## Domain Object to Domain Object Relations
### 1. Restaurant
	1. A restaurant can have multiple reviews.
	2. A restaurant can belong to a list of favorites.
 
### 2. Reviews
	1. A review can be written for a restaurant.

### 3. Events
        1. An event is related to a restaurant.
       


## Yelp Fusion API
The Yelp Fusion API is perfect for our particular project because it provides much of the functionality that a restaurant reviewing application would need. Yelp fusion API provides the endpoints for fetching businesses and reviews. The Yelp Fusion API will be able to fetch the initial data of about 2,000 restaurants and their reviews from Yelp's database. It also provides functionality for searching for restaurants based on location, keyword, and phone number. If desired, we can also retrieve top restaurants based on ratings or location. The API also provides autocomplete suggestions for restaurants.

