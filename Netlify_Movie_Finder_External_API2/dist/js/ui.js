class UI {
    constructor() {
        this.movieMetadata = document.getElementById('movie-metadata');
        this.loadingDiv = document.getElementById('loading');
    }

    showResults(movieName, movieDetails) {
        let streaming_region, streaming_url;
        this.movieMetadata.style.display = 'block';
        let output = `
            <div class="result-container">
                <div class="result-items">
                    <div class="item">
                        <h4>TITLE</h4> 
                        <input type="text" value="${movieName}" disabled>
                    </div>
                </div>
            </div>
        `;
        movieDetails.forEach(function(item) {
            streaming_region = item.region;
            streaming_url = item.ios_url ? item.ios_url : item.android_url;
            if (streaming_url !== '' && streaming_url !== null) {
                output += `
                <div class="result-container">
                    <div class="result-items">
                        <div class="item">
                            <h4>REGION</h4> 
                            <input type="text" value="${streaming_region}" disabled>
                        </div>
                        <div class="item">
                            <h4>STREAMING URL</h4> 
                            <input type="text" value="${streaming_url}" disabled>
                        </div>
                    </div>
                </div>
            `;
            }
        });
        this.movieMetadata.innerHTML = output;
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
        const movieInput = document.querySelector('.movie-title');

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
            <div class="loader">
                <img src="js/images/loading.gif" class="loader" alt="Loading results">
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
        document.getElementById('title').value = '';
    }

    clearLoader() {
        this.loadingDiv.style.display = 'none';
    }
}