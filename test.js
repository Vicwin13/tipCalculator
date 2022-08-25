const axios = require("axios");

const options = {
  method: "GET",
  url: "https://numbersapi.p.rapidapi.com/1729/math",
  params: { fragment: "true", json: "true" },
  headers: {
    "X-RapidAPI-Key": "a9ccdd7684msh4d9442b8c6ed76bp199d32jsnab9df1d63f95",
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
