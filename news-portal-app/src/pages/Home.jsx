import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("business");

  const getAllNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=df86acc14610493180be3b25f8e077ac`
      )
      .then((response) => {
        setNews(response?.data?.articles);
      })
      .catch((error) => {
        console.log("error fetching news: ", error);
      });
  };

  const handleButtonClick = (newCategory) => {
    setCategory(newCategory);
    getAllNews(newCategory);
  };

  useEffect(() => {
    getAllNews(category);
  }, [category]);

  return (
    <div className="w-full h-screen">
      <div className="bg-teal-600 h-20">
        <h2 className="font-bold text-center p-4 items-center text-3xl text-white">
          News Portal App
        </h2>
      </div>
      <div className="m-4 flex gap-x-4 justify-center ">
        <Button
          label={"Politics"}
          onClick={() => handleButtonClick("politics")}
        />
        <Button
          label={"Business"}
          onClick={() => handleButtonClick("business")}
        />
        <Button label={"Sports"} onClick={() => handleButtonClick("sports")} />
        <Button label={"Health"} onClick={() => handleButtonClick("health")} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
        {news.map((article, index) => (
          <Card
            key={index}
            id={article?.id}
            title={article?.title}
            description={article?.description}
            urlToImage={article?.urlToImage}
            url={article?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
