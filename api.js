//const fetch = require('node-fetch');

const apiKey = '69e3891a'
const base_url = `http://www.omdbapi.com/?apikey=${apiKey}&`

const processSearchResult = searchResult => ({
    title: searchResult.Title,
    year: searchResult.Year,
    id: searchResult.imdbID,
    type: searchResult.Type,
})

const processMovieResult = movieResult => ({
    title: movieResult.Title,
    year: movieResult.Year,
    id: movieResult.imdbID,
    type: movieResult.Type,
    rated: movieResult.Rated,
    runtime: movieResult.Runtime,
    plot: movieResult.Plot,
    poster: movieResult.Poster,
    ratings: movieResult.Ratings,
})

const searchByString = async (str, page=1) => {
    try {
        const response = await fetch(`${base_url}s=${str}&page=${page}`)
        const result = await response.json()
        return result.Search.map(processSearchResult)
    }
    catch {
        return []
    }
}

const getMovieById = async (id) => {
    try {
        const response = await fetch(`${base_url}i=${id}`)
        const result = await response.json()
        return processMovieResult(result)
    }
    catch {
        return {}
    }
}

export { searchByString, getMovieById }

// (async () => {
//     const results = await searchByString('a')
//     console.log(results)
// })()

// (async () => {
//     const results = await getMovieById('tt0118570')
//     console.log(results)
// })()
