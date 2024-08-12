import React, { useState } from "react";

const Sixteen = ({ topAnimeList, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = topAnimeList.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(topAnimeList.length / itemPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-10 border-8 border-sky-500">
      <ul>
        {currentItems.map((animeName, i) => {
          return <li key={i}>{animeName}</li>;
        })}
      </ul>
      <div className="flex gap-3">
        {pageNumber.map((num) => (
          <button
            className="border-2 border-red-500 p-3"
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sixteen;
