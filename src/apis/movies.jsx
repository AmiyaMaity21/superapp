import axios from "axios"

export const getMoviesList = async (title) => {
    try {
        const reqUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}&s=${title}`;
        const response = await axios.get(reqUrl);
        console.log(response.data.Search)
        return response.data.Search;
    } catch (error) {
        console.log(error);
        //alert("something went wrong!")

    }

}
