'use strict';

const mockData = require('./mockData.js').data;

// Your code here

//console.log(mockData);  // console log users uit mockData js file

//// Start 
const userProfileObject = {}; 

//// First name
let firstName = prompt("What is your first name?");

while (firstName === "") {
  console.log("Please enter your first name.");
  firstName = prompt("What is your first name?");
}

userProfileObject["first_name"] = firstName;
//// Last name
let lastName = prompt("What is your last name?");

while (lastName === "") {
    console.log("Please enter your last name.");
    lastName = prompt("What is your last name?");
}

userProfileObject["last_name"] = lastName;
//// Age
let age = prompt("What is your age?");

while (isNaN(age) || age < 18) {
  if (isNaN(age)) {
    console.log("Please enter a number as age.");
  } else {
    console.log("You must be at least 18 or older to create a profile.");
  }
  age = prompt("What is your age?");
}

let ageNumber = Number(age);
userProfileObject["age"] = ageNumber;
//// Gender
let gender = prompt("What is your gender? (F/M/X)").toUpperCase();

while (gender !== "M" && gender !== "F" && gender !== "X") {
  console.log("Please enter either F, M or X as gender.")
  gender = prompt("What is your gender? (F/M/X)").toUpperCase();
}

userProfileObject["gender"] = gender;
////genderInterest
let genderInterest = prompt("Which gender do you want to date?(F/M/X)").toUpperCase();

while (genderInterest !== "M" && genderInterest !== "F" && genderInterest !== "X"){
  console.log("Please enter either F, M or X as gender.")
  genderInterest = prompt("Which gender do you want to date?(F/M/X)").toUpperCase();
}

userProfileObject["gender_interest"] = genderInterest;
//// Location
let location = prompt ("Is your location rural or city?").toLowerCase();

while (location !== "rural" && location !== "city") {
  console.log("Please enter 'rural' or 'city' as your location.");
  location = prompt ("Is your location rural or city?").toLowerCase();
}

userProfileObject["location"] = location;
//// Min Age Interest
let minAgeInterest = prompt("What is the minimum age you want to date?");

while (isNaN(minAgeInterest) || minAgeInterest <18){
  if (isNaN(minAgeInterest)) {
    console.log("Please enter a number for age.");
  } else { 
    console.log("18 is the minimum age to date.");
  }
  minAgeInterest = prompt("What is the minimum age you want to date?");
  }

let minAgeinterestNumber = Number(minAgeInterest);
userProfileObject["min_age_interest"] = minAgeinterestNumber;
//// Max Age Interest
let maxAgeInterest = prompt("What is the maximum age you want to date?"); 

while (isNaN(maxAgeInterest) || maxAgeInterest < minAgeInterest) {
  if (isNaN(maxAgeInterest)) {
    console.log("Please enter a number for age.");
  } else if (maxAgeInterest < 18) {
    console.log("you maximum age to date should be higher than 18.");
  } else {
    console.log("Your max age interest should be higher than your min age interest.");
}
  maxAgeInterest = prompt("What is the maximum age you want to date?");   
}

  let maxAgeInterestNumber = Number(maxAgeInterest);
  userProfileObject["max_age_interest"] = maxAgeInterestNumber;
//// Match
let matchedProfiles = []

for (let i = 0; i < mockData.length; i++) {
  if (
    userProfileObject.location == mockData[i].location &&
    userProfileObject.age >= mockData[i].min_age_interest &&
    userProfileObject.age <= mockData[i].max_age_interest &&
    userProfileObject.min_age_interest <= mockData[i].age &&
    userProfileObject.max_age_interest >= mockData[i].age &&
    mockData[i].gender_interest == userProfileObject.gender && 
    userProfileObject.gender_interest == mockData[i].gender) {
    matchedProfiles.push(mockData[i]);
  }
}

//// count number of matches
const numberOfMatches = matchedProfiles.length;
console.log('\n The number of matches you have is: ', numberOfMatches, '\n');

console.log('These are your matches:\n');

//// readable format
for (let i in matchedProfiles) {
  console.log(`${matchedProfiles[i].first_name} ${matchedProfiles[i].last_name} (${matchedProfiles[i].age}) from a ${matchedProfiles[i].location} area.\n`);
}

//// 
