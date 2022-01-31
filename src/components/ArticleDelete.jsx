import React from "react";
import { useDispatch } from "react-redux";
import { deleteNew } from "../actions/news.action";

const ArticleDelete = ({ id }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(deleteNew(id))}>Supprimer</button>;
};

export default ArticleDelete;
