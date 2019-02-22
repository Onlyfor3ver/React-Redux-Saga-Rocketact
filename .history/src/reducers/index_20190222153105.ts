import { combineReducers, Reducer } from "redux";
import * as Action from "../actions";

import { IRootStore } from "../store";

export interface IIncrementInfoInfoStore {
  value: {} | null;
  // TODO: 其他属性
}

const IncrementInfoReducer: Reducer = (
  state: IIncrementInfoInfoStore = { value: 0 },
  action
) => {
  if (action.type === Action.REQUEST_INCREMENT.SUCCESS) {
    return { ...state, value: 1 };
  }

  if (action.type === Action.REQUEST_INCREMENT_ASYNC.SUCCESS) {
    console.log("reducer", { ...state, value: 2 });
    return { ...state, value: 2 };
  }

  return state;
};

const rootReducer = combineReducers({ IncrementInfo: IncrementInfoReducer });

export default rootReducer;
