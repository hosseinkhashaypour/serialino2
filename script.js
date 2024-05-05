const apiKey = '74158c92433e46849bff75645c284308';

async function getMoviedata(movieTitle) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (data.total_results > 0) {
            const movies = data.results;
            let counter = 0;
            movies.forEach(movie => {
                if (counter < 3) {
                    const movieTitle = movie.title;
                    const posterPath = movie.poster_path;
                    const movieContent = `<div class="movie">
                                              <img src="https://image.tmdb.org/t/p/w500/${posterPath}" alt="${movieTitle}" class = "img-style">
                                          </div>`;
                    const moviesContainer = document.querySelector(".movies");
                    moviesContainer.insertAdjacentHTML('beforeend', movieContent);
                    counter++
                }
            });
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}

const movieTitle = ["Rocky", "creed"]
getMoviedata(movieTitle);


function backtotop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const logo = document.getElementById("logo-header");
logo.addEventListener('click', () => {
    location.reload()
})

document.addEventListener('copy' , (a)=>{
	a.preventDefault()
})


document.addEventListener('contextmenu' , (b)=>{
	b.preventDefault()
})

window.addEventListener('keydown' , (e)=>{
	if(e.key === "F12"){
		e.preventDefault()
	}
})