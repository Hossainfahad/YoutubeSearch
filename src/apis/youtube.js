
import axios from 'axios'


const KEY='AIzaSyADobXakbHMfQ9Whjr4SZO_2gLw-IDn2yg';

 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key: KEY
    }
})