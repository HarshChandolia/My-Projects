// Event Listeners

// Form submit event
document.getElementById('form-submit').addEventListener('click', addMovie);
// Delete movie event
document.getElementById('movie-list').addEventListener('click', deleteMovie);
// DOM load event
document.addEventListener('DOMContentLoaded', displayMovieListLS);

// Add vars
let movieList = document.getElementById('movie-list');

// Display movie list on page load
function displayMovieListLS() {
    // Define list var
    let movieListLS;
    // Assign list var with current LS
    if (localStorage.getItem('movies') === null) {
        movieListLS = [];
    } else {
        movieListLS = JSON.parse(localStorage.getItem('movies'));
    }

    let output = document.createElement('div');
    movieListLS.forEach(function(movie) {

        let [id, name, genre] = movie;

        output.innerHTML += `
        <div class="movie-list">
            <div class="movie-list-id">
                <h4>${id}</h4>
            </div>
            <div class="movie-list-name">
                <h4>${name}</h4>
            </div>
            <div class="movie-list-genre">
                <h4>${genre}</h4>
            </div>
            <div class="movie-delete">
                <h4><a href="#" class="movie-delete-item">X</a></h4>
            </div>
        </div>
        `;

        // Append div to movie list
        movieList.appendChild(output);
    });
}

// Add movie to list
function addMovie(e) {
   // Set variables for input values
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const genre = document.getElementById('genre').value;

    // Store in movie array
    movieArray = [id, name, genre];

    // Validate inputs
    if (id === '' || name === '' || genre === '') {
        showAlert('Please enter all fields', 'danger');
    } else {
        let output = document.createElement('div');

        output.innerHTML = `
        <div class="movie-list">
            <div class="movie-list-id">
                <h4>${id}</h4>
            </div>
            <div class="movie-list-name">
                <h4>${name}</h4>
            </div>
            <div class="movie-list-genre">
                <h4>${genre}</h4>
            </div>
            <div class="movie-delete">
                <h4><a href="#" class="movie-delete-item">X</a></h4>
            </div>
        </div>
        `;

        // Append div to movie list
        movieList.appendChild(output);

        // Add movie to local storage
        addToLocalStorage(movieArray);

        // Clear input values
        clearInput();

        // Alert that movie is added
        showAlert('Movie added', 'success');
    }

    e.preventDefault();
}

// Delete movie from list
function deleteMovie(e) {
    if (e.target.classList.contains('movie-delete')) {
        e.target.parentElement.parentElement.parentElement.remove();
        deleteFromLS(JSON.parse(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent));
        // Alert that movie is deleted
        showAlert('Movie deleted', 'success');
    } 
} 

// Add movie to local storage
function addToLocalStorage(movie) {
    // Define list var
    let movieListLS;
    // Assign list var with current LS
    if (localStorage.getItem('movies') === null) {
        movieListLS = [];
    } else {
        movieListLS = JSON.parse(localStorage.getItem('movies'));
    }

    // Add movie to list var
    movieListLS.push(movie);

    // Update local storage
    localStorage.setItem('movies', JSON.stringify(movieListLS));
}

// Delete movie from local storage
function deleteFromLS(movieId) {
    // Define list var
    let movieListLS;
    // Assign list var with current LS
    if (localStorage.getItem('movies') === null) {
        movieListLS = [];
    } else {
        movieListLS = JSON.parse(localStorage.getItem('movies'));
    } 
    
    movieListLS.forEach(function(movie, index) {
        let [id, name, genre] = movie;
        id = parseInt(id);
        if (id === movieId) {
            movieListLS.splice(index, 1);
        }
    });

    // Update local storage
    localStorage.setItem('movies', JSON.stringify(movieListLS));
}

// Show alert
function showAlert(msg, type) {
    // Create alert div
    const alertDiv = document.createElement('div');

    // Add class
    alertDiv.className = `alert alert-${type}`;

    // Add text
    alertDiv.appendChild(document.createTextNode(msg));

    // Get parent
    const mainC = document.querySelector('.main-container');

    // Get element before which alert needs to be inserted
    const formC = document.querySelector('.form-container');

    // Insert alert
    mainC.insertBefore(alertDiv, formC);

    // Clear alert
    setTimeout(clearAlert, 3000);
}

function clearAlert() {
    document.querySelector('.alert').remove();
}

function clearInput() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('genre').value = '';
}

