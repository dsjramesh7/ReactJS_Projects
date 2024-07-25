import React, { useEffect, useState } from "react";

const Six = () => {
  const [item, setItem] = useState(null);
  const fetchAPI = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
    setItem(data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      {
      item ? (
        <div>
          <h1>{item.title}</h1>
          <h3>{item.body}</h3>
        </div>
      ) : (
        <p>no data is present....</p> 
      )
      }
    </>
  );
};

export default Six;
