import { combineReducers, Reducer } from "redux";
import * as Action from "../actions";

import { IRootStore } from "../store";

export interface IHelloInfoStore {
  helloInfo: {} | null;
  // TODO: 其他属性
}

const HelloInfoReducer: Reducer = (
  state: IHelloInfoStore = { helloInfo: null },
  action
) => {
  if (action.type === Action.REQUEST_HELLOINFO.SUCCESS) {
    return { ...state, helloInfo: { ...action.helloInfo } };
  }

  return state;
};

const rootReducer = combineReducers({ helloInfo: HelloInfoReducer });

export default rootReducer;
