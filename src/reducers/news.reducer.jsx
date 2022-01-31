import {
  GET_NEWS,
  ADD_NEW,
  EDIT_NEW,
  DELETE_NEW,
} from "../actions/news.action";

const initialState = {};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;
    case ADD_NEW:
      return [action.payload, ...state];
    case EDIT_NEW:
      return state.map((news) => {
        if (news.id === action.payload.id) {
          return {
            ...news,
            content: action.payload.content,
          };
        } else return news;
      });
    case DELETE_NEW:
      return state.filter((news) => news.id !== action.payload.postId);
    default:
      return state;
  }
}
