import React, { useState } from "react";

const Fifteen = ({ itemOfthings }) => {
  const [searchItem, setSearchItem] = useState("");

  const filterItems = itemOfthings.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <input
        type="text"
        placeholder="Search Here..."
        className="p-4 border-2 border-black"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div>
        {filterItems && filterItems.length > 0 ? (
          filterItems.map((item, i) => <h1 key={i}>{item}</h1>)
        ) : (
          <p>no data present</p>
        )}
      </div>
    </div>
  );
};

export default Fifteen;
