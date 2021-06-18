import { takeEvery, put, call } from "redux-saga/effects";
import { showAlert } from "../actions/authActions";
import {
  FETCH_USERS,
  FETCHED_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from "../actions/actionsType.js";
import { get, post, putRequest, deleteReq } from "../helpers/requestHelper";

export function* adminSagaWatcher() {
  yield takeEvery(ADD_USER, addNewUserSagaWorker);
  yield takeEvery(EDIT_USER, editUserSagaWorker);
  yield takeEvery(FETCH_USERS, fetchUsersSagaWorker);
  yield takeEvery(DELETE_USER, deleteUserSagaWorker);
}

function* fetchUsersSagaWorker() {
  try {
    const data = yield call(getUsers);
    yield put({ type: FETCHED_USERS, payload: data });
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}

function* addNewUserSagaWorker({ payload }) {
  try {
    yield call(postNewUser, payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}

function* editUserSagaWorker({ payload }) {
  try {
    yield call(editUser, payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}
function* deleteUserSagaWorker({ payload }) {
  try {
    yield call(deleteUser, payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}

async function getUsers() {
  return get("adminpage");
}
async function postNewUser(data) {
  return post("adminpage", data);
}
async function editUser(data) {
  return putRequest("adminpage", data.id, data);
}
async function deleteUser(id) {
  return deleteReq("adminpage", id);
}
