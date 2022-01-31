import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editNew } from "../actions/news.action";
import ArticleDelete from "./ArticleDelete";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const dispatch = useDispatch();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const handleEdit = async () => {
    // Pour une vrai base de données il n'est pas utile de renvoyer chaque data
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
      id: article.id,
    };

    await dispatch(editNew(data));
    setIsEditing(false);
  };

  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>

      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <ArticleDelete id={article.id} />
      </div>
    </div>
  );
};

export default Article;
