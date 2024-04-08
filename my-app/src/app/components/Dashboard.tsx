"use client"
import React, { useState, useEffect } from 'react';
import NewItem from "./NewItem ";
import axios from "axios";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {    
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7592a43d7ab34ad4ab9ba5169e9b1399",{
          params: {
            pageSize: 12,
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);
  
  return (
    
    <section className="text-gray-400 body-font bg-gray-900">
      
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Las últimas 12 noticias</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Las mejores noticias en Costa Rica</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <ul>

          
          {news.map((article: any, index: number) => (
            <li key={index}>
             <NewItem author={article.author} title={article.title}/>
            </li>
          ))}
          </ul>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>

  );
};

export default Dashboard;