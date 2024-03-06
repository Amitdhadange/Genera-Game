import axios from "axios";

const key="d07e6ab6737f45a296d3e8fd76f00ba8";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}