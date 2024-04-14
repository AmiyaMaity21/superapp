import React, { useEffect, useState } from "react";
import { getNewsDetails } from "../../apis/news";
import styles from "./News.module.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
    const intervalId = setInterval(fetchNews, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchNews = async () => {
    const result = await getNewsDetails();
    setNews(result);
  };
  return (
    <div className={styles.newsCard}>
      <img src={news.urlToImage} alt="News cover" />
      <div className={styles.newsDescription}>{news.description}</div>
      <div>
        <p className={styles.newsTitle}>{news.title}</p>
      </div>
    </div>
  );
};
export default News;
