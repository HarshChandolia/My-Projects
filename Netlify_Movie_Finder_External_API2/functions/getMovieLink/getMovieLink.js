const fetch = require("node-fetch");

const handler = async (event) => {
  const { movieId } = event.queryStringParameters

  const API_SECRET = process.env.API_SECRET;

  try {
    const movieResponse = await fetch(`https://api.watchmode.com/v1/title/${movieId}/sources/?apiKey=${API_SECRET}`);
    const movieLinkData = await movieResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(movieLinkData)
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
