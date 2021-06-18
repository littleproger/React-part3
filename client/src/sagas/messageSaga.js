import { takeEvery, put, call } from "redux-saga/effects";
import { showAlert } from "../actions/authActions";
import { FETCH_MESSAGES, FETCHED_MESSAGES, ADD_NEW_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "../actions/actionsType";
import { get, post, putRequest, deleteReq } from "../helpers/requestHelper";

export function* messageSagaWatcher() {
  yield takeEvery(FETCH_MESSAGES, fetchMessageSagaWorker);
  yield takeEvery(ADD_NEW_MESSAGE, addNewMessageSagaWorker);
  yield takeEvery(EDIT_MESSAGE, editMessageSagaWorker);
  yield takeEvery(DELETE_MESSAGE, deleteMessageSagaWorker);
}

function* fetchMessageSagaWorker() {
  try {
    const data = yield call(getMessages);
    yield put({ type: FETCHED_MESSAGES, payload: data });
  } catch (e) {
    yield put(showAlert(e));
  }
}

function* addNewMessageSagaWorker({payload}) {
  try {
    yield call(postNewMessage,payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}

function* editMessageSagaWorker({payload}) {
  try {
    yield call(editMessage,payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}
function* deleteMessageSagaWorker({payload}) {
  try {
    yield call(deleteMessage,payload);
  } catch (e) {
    console.log(e);
    yield put(showAlert(e));
  }
}
async function getMessages() {
  return get("chat");
}
async function postNewMessage(data){
  return post("chat",data);
}
async function editMessage(data){
  return putRequest("chat",data.id,data);
}
async function deleteMessage(id){
  return deleteReq("chat",id);
}