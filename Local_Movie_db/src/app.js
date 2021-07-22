// Initialize Movies
const movies = new Movies;

// Initialize UI
const ui = new UI;

// Event Listeners
document.getElementById('form-submit').addEventListener('click', getMovieMetadata);

// Get movie metadata from local db and display in UI
function getMovieMetadata(e) {
    // Set input vars
    const nameInput = document.getElementById('name').value;
    const langInput = document.getElementById('lang').value;

    // Validate input values
    if (nameInput !== '' && langInput !== '') {
        ui.clearInputs();
        // Get movie metadata from db
        movies.getMovie(nameInput, langInput)
            .then(data => {
                if (data.movieLookupData.id === undefined) {
                    ui.movieMetadata.style.display = 'none';
                    ui.loadingImage();
                    setTimeout(() => {
                        ui.showAlert('Movie not found! Please try again.', 'alert alert-danger');
                    }, 2000);
                } else {
                    ui.movieMetadata.style.display = 'none';
                    ui.loadingImage();
                    setTimeout(() => {
                        ui.showResults(data.movieLookupData);
                    }, 2000);
                }
            })
    } else {
        ui.clearInputs();
        ui.showAlert('Fields cannot be blank', 'alert alert-danger');
    }

    e.preventDefault();
}

// Add movie to local db
function addMovie() {
    const movie = {
        id: '5',
        name: 'The Game',
        language: 'English'
    }

    movies.addMovie(movie)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

addMovie();

// Add movie lookup to local db
function addMovieLookup() {
    const movieLookup = {
        id: '5',
        name: 'The Game',
        genre: 'Drama, Thriller',
        imdb_rating: '9.0',
        release_year: 1994,
        streaming_platforms: 'Hotstar'
      }

    movies.addMovieLookup(movieLookup)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// Edit movie lookup in local db
function updateMovieMetadata() {
    const updatedMovie = {
        id: '4',
        name: 'Shawshank Redemption',
        genre: 'Drama, Suspense',
        imdb_rating: '9.0',
        release_year: 1994,
        streaming_platforms: 'Netflix'
      }

    movies.updateMovieMetadata(updatedMovie)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// Delete movie in local db
function deleteMovie() {
    const idToDelete = 5;
    movies.deleteMovie(idToDelete)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// Delete movie lookup in local db
function deleteMovieLookup() {
    const idToDelete = 5;
    movies.deleteMovieLookup(idToDelete)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}