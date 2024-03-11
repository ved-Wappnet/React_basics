const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialstate = {
  loading: false,
  posts: [],
  error: "",
};

const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

const fetchpostrequest = () => {
  return {
    type: FETCH_POSTS,
  };
};
const fetchpostrequestSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
};
const fetchpostrequestFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

const fetchposts = () => {
  return function (dispatch) {
    dispatch(fetchpostrequest);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data.map((post) => post.title);
        dispatch(fetchpostrequestSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchpostrequestFailure(error.message));
      });
  };
};

const reducer = (state = initialstate, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};

// Store

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchposts());
