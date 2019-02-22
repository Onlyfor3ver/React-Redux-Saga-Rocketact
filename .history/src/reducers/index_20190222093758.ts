import { combineReducers, Reducer } from "redux";
import * as Action from "../actions";

import { IRootStore } from "../store";

export interface ICartInfoStore {
  cartInfo: {} | null;
  // TODO: 其他属性
}

const HelloInfoReducer: Reducer = (
  state: ICartInfoStore = { cartInfo: null },
  action
) => {
  if (action.type === Action.REQUEST_CARTINFO.SUCCESS) {
    return { ...state, cartInfo: { ...action.cartInfo } };
  }

  return state;
};

const rootReducer = combineReducers({ cartInfo: cartInfoReducer });

export default rootReducer;
