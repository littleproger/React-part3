import { takeEvery, fork } from "redux-saga/effects";
import { authSagaWatcher } from "./authSaga";
import { messageSagaWatcher } from "./messageSaga";
import { adminSagaWatcher } from "./adminSaga";
import { FETCH_MESSAGES, LOGIN } from "../actions/actionsType";

export function* sagaWatcher() {
  yield fork(authSagaWatcher);
  yield fork(messageSagaWatcher);
  yield fork(adminSagaWatcher);
}
