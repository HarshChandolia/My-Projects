class UI {
    constructor() {
        this.movieMetadata = document.getElementById('movie-metadata');
        this.loadingDiv = document.getElementById('loading');
    }

showResults(movie) {
    this.movieMetadata.style.display = 'block';
    this.movieMetadata.innerHTML = `
        <div class="result-container">
            <div class="result-items">
                <div class="item">
                    <h4>NAME</h4> 
                    <input type="text" value="${movie.name}" disabled>
                </div>
                <div class="item">
                    <h4>GENRE</h4> 
                    <input type="text" value="${movie.genre}" disabled>
                </div>
                <div class="item">
                    <h4>IMDB RATING</h4> 
                    <input type="text" value="${movie.imdb_rating}" disabled>
                </div>
                <div class="item">
                    <h4>RELEASE YEAR</h4> 
                    <input type="text" value="${movie.release_year}" disabled>
                </div>
                <div class="item">
                    <h4>STREAMING PLATFORMS</h4> 
                    <input type="text" value="${movie.streaming_platforms}" disabled>
                </div>
            </div>
        </div>
    `;
    }

    showAlert(msg, className) {
        // Clear alert if present
        this.clearAlert();
        // Create alert div
        const alertDiv = document.createElement('div');

        // Add class
        alertDiv.className = className;

        // Add text
        alertDiv.appendChild(document.createTextNode(msg));

        // Get parent
        const container = document.querySelector('.container');

        // Get element before which alert should be inserted
        const movieInput = document.querySelector('.movie-name');

        // Insert alert
        container.insertBefore(alertDiv, movieInput);

        // Clear alert after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    loadingImage() {
        this.loadingDiv.style.display = 'block';
        this.loadingDiv.innerHTML = `
            <div class="result-items">
                <img src="images/loading.gif" class="result-items" alt="Loading results">
            </div>
            `;

        // Clear loader after 2 seconds
        setTimeout(() => {
            this.clearLoader();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearInputs() {
        document.getElementById('name').value = '';
        document.getElementById('lang').value = '';
    }

    clearLoader() {
        this.loadingDiv.style.display = 'none';
    }
}