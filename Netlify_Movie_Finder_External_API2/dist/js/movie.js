class Movie {
    constructor() {

    }

    // GET request
    async getMovieId(title) {
        const movieResponse = await fetch(`https://api.watchmode.com/v1/search/?apiKey=YUefVCvGRMWn8LkhNj5mOjVp2dVduoFrIYE50llq&search_field=name&search_value=${title}`);
        const movieIdData = await movieResponse.json();

        return {
            movieIdData
        }
    }

    async getMovieMD(id) {
        const movieResponse = await fetch(`https://api.watchmode.com/v1/title/${id}/sources/?apiKey=YUefVCvGRMWn8LkhNj5mOjVp2dVduoFrIYE50llq`);
        const movieMDData = await movieResponse.json();

        return {
            movieMDData
        }
    }
}