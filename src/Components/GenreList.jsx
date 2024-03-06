import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({genereId,selectedGenresName}) => {
  const [genreList, setGenreList] = useState([])
  const [activeIndex,setActiveIndex]=useState(0)
  useEffect(() => {
    getGenreList();
  },[]);
  const getGenreList=()=> {
    GlobalApi.getGenreList.then((resp) => {
      // console.log(resp.data.results);
      setGenreList(resp.data.results);
    })
  }
  return (
    <div>
      <h1 className="font-bold text-2xl font-serif dark:text-white">Genera</h1>
      {genreList.map((item,index) => {
  return (
    <div onClick={()=>{setActiveIndex(index);genereId(item.id);selectedGenresName(item.name)}}
     className={`flex items-center gap-2 mb-2 cursor-pointer group hover:bg-slate-400 p-2 rounded-lg mr-2 dark:hover:bg-slate-700
      ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
      <img src={item.image_background} alt={item.name} className={`w-[40px] h-[40px] rounded-lg object-cover group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index?"scale-105":null}`} />
      <h2 className={`dark:text-slate-50 font-serif text-md group-hover:font-semibold scale-105 transition-all ease-out duration-300${activeIndex==index?"font-bold":null}`}>{item.name}</h2>
    </div>
  );
})}
    </div>
  );
};

export default GenreList;
