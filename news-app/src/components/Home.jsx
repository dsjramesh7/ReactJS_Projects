import React from "react";
import Card from "./Card";

const Home = ({ news }) => {
  return (
    <div className="home">
      {news &&
        news.map((element, i) => {
          return (
            <Card
              key={i}
              title={element.title}
              content={element.content}
              author={element.author}
              publishedAt={element.publishedAt}
              url={element.url}
              urlToImage={element.urlToImage}
              altImage={"/bbc.png"}
            />
          );
        })}
    </div>
  );
};

export default Home;
