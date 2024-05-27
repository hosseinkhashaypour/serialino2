const searchInput = document.getElementById("search");
const moviesItems = document.querySelector(".movies");
const apiKey = '74158c92433e46849bff75645c284308';

async function getMoviedata(movieTitle) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.total_results);
        console.log(data);
        moviesItems.innerHTML = ''; //=>> پاک کردن محتوای قبلی
        if (data.total_results > 0) {
            const movies = data.results
            movies.forEach(movie => {
                const movieTitle = movie.title;
                const posterPath = movie.poster_path;
                const movieLikes = movie.popularity
                const movieContent = `<div class="posters">
                <img src="https://image.tmdb.org/t/p/w500/${posterPath}" alt="${movieTitle}" class="img-style">
                <br>
                <h1>${movieTitle}</h1>
                <br>
                <p1>${movieLikes + "امتیاز"}</p1>
                <br>
                <button class = "show" onclick = "NaM">${"تماشای فیلم"}</button>
                <br>
                </div>`
                moviesItems.insertAdjacentHTML('beforeend', movieContent)
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', (a) => {
    a.preventDefault()
})

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.trim()
    if (searchText !==  '') {
        getMoviedata(searchText)
    } else if(searchText == ''){
        location.reload()
    }
})

const movieTitles = ['فسیل' , 'soul' , 'creed']

movieTitles.forEach(movieTitle=>{
    getMoviedata(movieTitle)
})


document.addEventListener("DOMContentLoaded" , ()=>{
    const getEmail = localStorage.getItem("Email(logged)")
    if(getEmail){
        const firstLetter = secondMail.charAt(0).toLocaleUpperCase()
        const makePFP = document.querySelector("#user-logged > h1")
        makePFP.innerHTML = firstLetter
    }
})


const hPFP = document.querySelector("#user-logged > h1");
hPFP.addEventListener('click' , ()=>{
    location.reload()
})


