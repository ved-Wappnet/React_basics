import { configureStore } from "@reduxjs/toolkit";
import Postreducer from "./features/postslice";

export default configureStore({
  reducer: {
    post: Postreducer,
  },
});
