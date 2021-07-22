class Movies {
    constructor() {
        // this.id = id;
        // this.name = name;
        // this.language = language;
        // this.genre = genre;
        // this.imdb_rating = imdb_rating;
        // this.release_year = release_year;
        // this.streaming_platforms = streaming_platforms;
    }

    // GET request
    async getMovie(name, lang) {
        // Get movie data
        const movieResponse = await fetch(`http://localhost:3000/movies`);
        const movieData = await movieResponse.json();

        let metadataId;
        movieData.forEach(function(movie) {
            if (name === movie.name && lang === movie.language) {
                metadataId = movie.id;
            }
        });
        //Get movie lookup data
        const movieLookupResponse = await fetch(`http://localhost:3000/movies_lookup/${metadataId}`);
        const movieLookupData = await movieLookupResponse.json();

        return {
            movieLookupData
        }
    }

    // POST request (Movie)
    async addMovie(movie) {
        const movieResponse = await fetch (`http://localhost:3000/movies`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const movieResponseData = await movieResponse.json();
        return movieResponseData;
    }

    // POST request (Movie Lookup)
    async addMovieLookup(movieLookup) {
        const movieLookupResponse = await fetch (`http://localhost:3000/movies_lookup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(movieLookup)
        });
        const movieLookupResponseData = await movieLookupResponse.json();
        return movieLookupResponseData;
        }

    // PUT request (Movie Lookup)
    async updateMovieMetadata(updatedMovie) {
        const movieUpdateResponse = await fetch (`http://localhost:3000/movies_lookup/${updatedMovie.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        });
        const movieUpdateResponseData = await movieUpdateResponse.json();
        return movieUpdateResponseData;
        }

    // DELETE request (Movie)
    async deleteMovie(id) {
        const movieDeleteResponse = await fetch (`http://localhost:3000/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const movieDeleteResponseData = await 'Movie deleted.'
        return movieDeleteResponseData;
        }

    // DELETE request (Movie Lookup)
    async deleteMovieLookup(id) {
        const movieLookupDeleteResponse = await fetch (`http://localhost:3000/movies_lookup/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const movieLookupDeleteResponseData = await 'Movie deleted.'
        return movieLookupDeleteResponseData;
        }
}