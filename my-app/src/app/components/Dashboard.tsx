"use client"
import React, { useState, useEffect } from 'react';
import NewItem from './NewItem ';
import axios from "axios";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7592a43d7ab34ad4ab9ba5169e9b1399", {
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

    const alertTimeout = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    const hideAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 20000);

    return () => {
      clearTimeout(alertTimeout);
      clearTimeout(hideAlertTimeout);
    };
  }, []);

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Las últimas 12 noticias</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Las mejores noticias en Costa Rica</p>
        </div>
        {showAlert && (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
          </div>
        )}
        <div className="flex flex-wrap -mx-4">
          {news.map((article: any, index: number) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
              <NewItem author={article.author} title={article.title} />
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>
  );
};

export default Dashboard;
