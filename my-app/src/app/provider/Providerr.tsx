"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getNews } from "../api/getNews";

const NewsContext = createContext<ArticleData[]>([]);

interface ArticleData {
  title: string;
  author: string;
  urlToImage: string;
}

interface NewsProviderProps {
  children: ReactNode;
}

export const Providerr: React.FC<NewsProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setArticles(news);
      } catch (error) {
        console.error(error);
        setArticles([]);
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={ articles }>
      {children}
    </NewsContext.Provider>
  );
};
export default Providerr;