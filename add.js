// API Schlüssel von ..........
// const key = 'f0bf9437';

let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');



// Funktion zum holen der Daten der API
let getMovie = () => {
    
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key_api}`;

    // Zweite Möglichkeit
    // let url2 = `http://www.omdbapi.com/?i=${movieName}&${key_api}`


    // Wenn das Eingabefeld leer ist
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class"msg">Bitte geben Sie einen Film ein </h3>`
    }

    // Wenn das Eingabefeld nicht leer ist
    else{
        fetch(url).then((resp) => resp.json()).then((data) => {
            // Wenn der Film nicht in der Datenbank vorhanden ist
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="response-content">

                        <img src=${data.Poster} class="poster">

                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                            <span>${data.Released}</span>
                            <span>${data.Runtime}</span>
                            <span>${data.Writer}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("<div></div>")}</<div>
                            </div>
                        </div>
                        
                    </div>

                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }

            // Wenn der Film nicht in der Datenbank vorhanden ist
            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        // Wenn ein Fehler auftritt
        .catch(() => {
            result.innerHTML = `<h3>Ein Fehler ist aufgetreten</h3>`
        });
    } 
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);







