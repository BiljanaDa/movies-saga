import { call, put, takeLatest } from "redux-saga/effects";
import { performGetMovies, setMovies } from "./slice";
import MoviesService from "../../services/movies.service";

function* movieHandler() {
  try {
    const data = yield call(MoviesService.getAllMovies);

    yield put(setMovies(data));
  } catch (e) {
    console.error(e);
  }
}

export function* watchSetMovies() {
  yield takeLatest(performGetMovies.type, movieHandler);
}
