import axios from "axios";
export const getNewsDetails = async () => {

    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Samsung&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        const response = await axios.get(reqUrl);
        const randomIndex = Math.floor(Math.random() * response.data.articles.length); 
        return response.data.articles[randomIndex];
    } catch (error) {
        console.log(error)
        alert("something went wrong! please try after sometimes")
    }
}
