import React, { useEffect, useState } from "react";
import {Loader} from "../Loader/Loader"
import './News.sass';

export const News = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    fetch('http://newsapi.org/v2/top-headlines?country=ua&apiKey=6f553b8f03334207b729285cdf7c9bfd')
      .then(res => res.json())
      .then(res => {
        setIsLoaded(true)
        setItems(res.articles.reverse())
      })
      .catch(error => {
        setError(error)
      });
  },[]);
   
  if (error) { return <div>Ошибка: {error.message}</div>; }
  
  if (!isLoaded) { return <Loader/> } 

  return (
    <section className="news">
      <div className="container">
        <div className="row">
            {items.slice(0, visible).map(item => (
              <div key={item.publishedAt + item.url}className="col-md-6 col-xl-4 col-xxl-3">
                <a className="news-item" href={item.url} target="_blank">
                  <div className="news-item_img embed-responsive-2by1">
                    <img src={item.urlToImage} alt="news-img"/>
                  </div>

                  <div className="news-item_caption">{item.title}</div>
                  <div className="news-item_descr">{item.description}</div>
                </a>
              </div>
            ))}

            { 
              visible < items.length && 
                <div className="col-12">
                  <button 
                    onClick={() => setVisible(visible + 5)} 
                    type="button" 
                    className="btn btn-width btn-primary btn-load">
                    Load more ({items.length - visible })
                  </button>
                </div>
            }
        </div>
      </div>
    </section>
  );
}