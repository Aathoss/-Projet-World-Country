import axios from "axios";

export const GET_NEWS = "GET_NEWS";
export const ADD_NEW = "ADD_NEW";
export const EDIT_NEW = "EDIT_NEW";
export const DELETE_NEW = "DELETE_NEW";

export const getNews = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3003/articles?_sort=id&_order=desc")
      .then((resp) => {
        dispatch({ type: GET_NEWS, payload: resp.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addNew = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3003/articles", data)
      .then((resp) => {
        dispatch({ type: ADD_NEW, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editNew = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3003/articles/${data.id}`,
      data: { ...data },
    })
      .then((resp) => {
        dispatch({ type: EDIT_NEW, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteNew = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3003/articles/${postId}`,
    })
      .then((resp) => {
        dispatch({ type: DELETE_NEW, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};
