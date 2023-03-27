import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './MedicalNews.css'

function MedicalNews() {

    const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1384bd54816e47f3a55156f0a790f3f9');
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className="medical-news">
      <h2>Medical News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MedicalNews
