const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        Title: 'Trending',
        url: `/trending/all/week?api_key=4cbdcbf22b240e76b3a63439183955b6&language=en-US`
    },
    TopRated: {
        Title: 'Top Rated',
        url: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`
    },
    fetchComedy: {
        Title: 'Comedy',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    TopAction: {
        Title: 'Action',
        url: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`
    }, 
     fetchThriller: {
        Title: 'Thriller',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    TopHorror: {
        Title: 'Horror',
        url: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`
    },
}