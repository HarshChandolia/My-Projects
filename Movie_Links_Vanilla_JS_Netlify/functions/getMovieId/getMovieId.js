const fetch = require("node-fetch");

const handler = async (event) => {
  const { movieTitle } = event.queryStringParameters

  const API_SECRET = process.env.API_SECRET;

  try {
    const movieResponse = await fetch(`https://api.watchmode.com/v1/search/?apiKey=${API_SECRET}&search_field=name&search_value=${movieTitle}`);
    const movieIdData = await movieResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(movieIdData)
    }

  } catch (error) {
    // const { status, statusText, headers, data } = error.response
    return { 
      statusCode: 500, 
      body: JSON.stringify("The program did not work.")
    }
}
}

module.exports = { handler }
