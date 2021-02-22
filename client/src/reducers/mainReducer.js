import {combineReducers} from 'redux';
import {headerReducer} from './headerReducer';
import {chatReducer} from './chatReducer';
import {authReducer} from './authReducer';
import {adminReducer} from './adminReducer';


export const mainReducer = combineReducers({
  header:headerReducer,
  chat:chatReducer,
  auth:authReducer,
  admin:adminReducer
})