import { combineReducers, Reducer } from "redux";
import * as Action from "../actions";

import { IRootStore } from "../store";

export interface IHelloInfoStore {
  helloInfo: {} | null;
  // TODO: 其他属性
}

const IncrementInfoReducer: Reducer = (
  state: IIncrementInfoInfoStore = { IncrementInfo: null },
  action
) => {
  if (action.type === Action.REQUEST_INCREMENT.SUCCESS) {
    return { ...state, IncrementInfo: { ...action.IncrementInfo } };
  }

  return state;
};

const rootReducer = combineReducers({ IncrementInfo: IncrementInfoReducer });

export default rootReducer;
