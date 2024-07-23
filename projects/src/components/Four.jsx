import React from "react";

const Four = () => {
  const animelist = ["One Piece", "AOT", "Demon Slayer", "MHA"];
  return (
    <ul>
      {animelist && animelist.length > 0 ? (
        animelist.map((individulalanime, index) => {
          return <li key={index}>{individulalanime}</li>;
        })
      ) : (
        <p>data not present</p>
      )}
    </ul>
  );
};

export default Four;
