import axios from "axios";
import React from "react";

const ArticleDelete = (props) => {
  const { id } = props;

  const handleDelete = () => {
    axios.delete("http://localhost:3003/articles/" + id).then(() => {
      window.location.reload();
    });
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer et article ?")) {
          handleDelete();
        }
      }}
    >
      Supprimer
    </button>
  );
};

export default ArticleDelete;
