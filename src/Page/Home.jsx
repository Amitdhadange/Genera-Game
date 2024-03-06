import React, { useEffect, useState } from "react";
import GenereList from "../Components/GenreList";
import Banner from "../Components/Banner";
import GlobalApi from "../Services/GlobalApi";
import TrandingGame from "../Components/TrandingGame";
import GamebyGanresId from "../Components/GamebyGanresId";

const Home = () => {
  const [allGamelist,setAllGameList]=useState()
  const [gameListByGenres,setGameListByGenres]=useState([])
  const [selectedGenresName,setSelectedGenresName]=useState('Action')

  useEffect(()=>{
      getAllGameList();
      getGameListByGeneresId(4);
  },[])
  const getAllGameList=()=>{
      GlobalApi.getAllGames.then((resp)=>{
         setAllGameList(resp.data.results)
      })
  }
  const getGameListByGeneresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      setGameListByGenres(resp.data.results)
    })
  }
  return (
      <div className="grid grid-cols-4 p-4">
        <div className="hidden md:block">
          <GenereList 
           genereId={(genereId)=>getGameListByGeneresId(genereId)}
           selectedGenresName={(name)=>setSelectedGenresName(name)}
           />
        </div>
        <div className=" col-span-4 md:col-span-3 ">
          {allGamelist?.length>0&&gameListByGenres.length>0?
          <div>
            <Banner gameBanner={allGamelist[0]}/>
            <TrandingGame gamelist={allGamelist}/>
            <GamebyGanresId gamelist={gameListByGenres}
            selectedGenresName={selectedGenresName}/>
          </div>
          :null}
          
        </div>
      </div>
  
  );
};

export default Home;
