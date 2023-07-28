import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrendingVideos = axios.get(movieBaseUrl+'/trending/all/day?api_key='+ api_key);

export default{
    getTrendingVideos
}

