import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Article from "../components/Article";
import { isEmpty } from "./../components/Utils";
import { getNews, addNew } from "../actions/news.action";

const News = () => {
  /* const [newsData, setNewsData] = useState([]); */
  const newsData = useSelector((state) => state.newsReducer);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      const data = {
        author: author,
        content: content,
        date: Date.now(),
      };

      await dispatch(addNew(data));
      setError(false);
      setAuthor("");
      setContent("");
      dispatch(getNews());
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>Nouvelle</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères.</p>}
        <input type="submit" value="Publier" />
      </form>

      <ul className="articles-list">
        {!isEmpty(newsData) &&
          newsData.map((article, idx) => (
            <Article article={article} key={idx} />
          ))}
      </ul>
    </div>
  );
};

export default News;
