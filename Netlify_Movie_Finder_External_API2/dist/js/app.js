// Initialize Movie
const movie = new Movie;

// Initialize UI
const ui = new UI;

// Event Listeners
document.getElementById('form-submit').addEventListener('click', getMovieMetadata);

// Get movie metadata from local db and display in UI
function getMovieMetadata(e) {
    // Set input vars
    const titleInput = document.getElementById('title').value;

    // Validate input values
    if (titleInput !== '') {
    ui.clearInputs();

    // Get movie metadata from db
    const fetchMovieId = async () =>
        await (await fetch(`/.netlify/functions/getMovieId?movieTitle=${titleInput}`)).json();
        
        fetchMovieId().then(data => {
            if (data.title_results == '') {
                ui.movieMetadata.style.display = 'none';
                ui.loadingImage();
                setTimeout(() => {
                    ui.showAlert('Movie not found! Please try again.', 'alert alert-danger');
                }, 2000);
            } else {
                const movieName = data.title_results[0].name;
                const fetchMovieLink = async () =>
                    await (await fetch(`/.netlify/functions/getMovieLink?movieId=${data.title_results[0].id}`)).json();

                    fetchMovieLink().then(data => {
                        if (data == '') {
                            ui.movieMetadata.style.display = 'none';
                            ui.loadingImage();
                            setTimeout(() => {
                                ui.showAlert('Movie not found! Please try again.', 'alert alert-danger');
                            }, 2000);
                        } else {
                            ui.movieMetadata.style.display = 'none';
                            ui.loadingImage();
                            setTimeout(() => {
                                ui.showAlert('Movie found! See results below.', 'alert alert-success');
                                ui.showResults(movieName, data);
                            }, 2000);
                        }
                    })
                }
            })
        } else {
            ui.clearInputs();
            ui.showAlert('Fields cannot be blank', 'alert alert-danger');
        }

    e.preventDefault();
}