import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
