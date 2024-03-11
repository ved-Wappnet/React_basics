import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = data.json();
  return result;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postData) => {
    const { id, ...updatedData } = postData;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const result = await response.json();
    return result;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
    return postId;
  }
);

const postslice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const updatedPostIndex = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (updatedPostIndex !== -1) {
          state.posts[updatedPostIndex] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postslice.reducer;
