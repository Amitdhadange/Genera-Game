import React, { useEffect } from "react";

const GamebyGanres = ({gamelist,selectedGenresName}) => {
  useEffect(() => {
    console.log(gamelist);
  }, []);
  return (
    <div>
        <h1 className="font-serif font-bold text-2xl mt-4 dark:text-white">{selectedGenresName} Games</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 md:grid-cols-2">
  {gamelist.map((item) => {
    return (
      <div className=" bg-blue-200 cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-all ease-in duration-300 flex flex-col items-center dark:bg-gray-900">
        <img
          src={item.background_image}
          alt="Loading..."
          className="h-72 rounded-t-lg object-cover mb-5 transform hover:scale-105 transition-all ease-in duration-300"
        />
        <h2 className="dark:text-white font-sans mb-3">
          {item.name} <span className="ml-3 bg-green-100 text-green-800 p-1 rounded-md font-semibold">{item.metacritic}</span>
        </h2>
        <h2 className="w-56 mb-3 flex flex-row justify-between dark:text-gray-300">
          <span >⭐{item.rating}</span><span>💬{item.reviews_count}</span><span>🔥{item.suggestions_count}</span>
        </h2>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default GamebyGanres;
