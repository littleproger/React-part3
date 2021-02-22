import { takeEvery, put, call } from "redux-saga/effects";
import { showAlert } from "../actions/authActions";
import { LOGIN, SET_USER, SET_ADMIN } from "../actions/actionsType";
import { post } from "../helpers/requestHelper";

export function* authSagaWatcher() {
  yield takeEvery(LOGIN, authSagaWorker);
}
function* authSagaWorker({ payload }) {
  try {
    const data = yield call(fetchPosts, payload);
    if (
      data["0"] &&
      data["0"].email === "admin" &&
      data["0"].password === "admin"
    ) {
      yield put({ type: SET_ADMIN, payload: data["0"] });
    } else if (data["0"]) {
      yield put({ type: SET_USER, payload: data["0"] });
    }
  } catch (e) {
    yield put(showAlert(e));
  }
}

async function fetchPosts(data) {
  return post("auth", data);
}
