const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // // Edge Case: Request Failed
    // if (error) return console.log(error);

    // // console.log(typeof body); // returns string

    // // Convert string to JSON object
    const data = JSON.parse(body);

    // // Edge Case: Breed not found
    // if (data.length === 0) {
    //   console.log("Breed not found.");
    //   return;
    // }

    // // console.log(data);
    // // console.log(typeof data); // Returns object
    // console.log(data[0].description);
    callback(error, data[0] ? data[0].description : null);
  });
};

module.exports = { fetchBreedDescription };