const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const REQUEST_SAGAINFO = "REQUEST_SAGAINFO";
const LOAD_SAGAINFO = "LOAD_SAGAINFO";

interface IRequestActionType {
  PENDING: string;
  SUCCESS: string;
  FAILURE: string;
}

const createRequestActionTypes = (base: string): IRequestActionType => {
  return {
    PENDING: `${base}_${PENDING}`,
    SUCCESS: `${base}_${SUCCESS}`,
    FAILURE: `${base}_${FAILURE}`
  };
};

interface IAction {
  type: string;
  [key: string]: any;
}

const createAction = (type: string, payload: any = {}): IAction => {
  return {
    type,
    ...payload
  };
};

export const REQUEST_INCREMENT = createRequestActionTypes("REQUEST_INCREMENT");
export const LOAD_INCREMENT = "LOAD_INCREMENT";
export const loadIncrement = () => createAction(LOAD_INCREMENT);

export const REQUEST_DECREMENT = createRequestActionTypes("REQUEST_DECREMENT");
export const LOAD_DECREMENT = "LOAD_DECREMENT";
export const loadDecrement = () => createAction(LOAD_DECREMENT);

export const REQUEST_INCREMENT_ASYNC = createRequestActionTypes(
  "REQUEST_INCREMENT_ASYNC"
);
export const LOAD_INCREMENT_ASYNC = "LOAD_INCREMENT_ASYNC";
export const loadIncrementAsync = () => createAction(LOAD_INCREMENT_ASYNC);
