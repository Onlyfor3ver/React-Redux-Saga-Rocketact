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
    return { ...state, value: state.value + action.value };
  }

  if (action.type === Action.REQUEST_INCREMENT_ASYNC.SUCCESS) {
    return { ...state, value: state.value + action.value };
  }

  if (action.type === Action.REQUEST_DECREMENT.SUCCESS) {
    return {
      ...state,
      value: state.value > -1 ? state.value - action.value : 0
    };
  }

  return state;
};

const rootReducer = combineReducers({ IncrementInfo: IncrementInfoReducer });

export default rootReducer;
