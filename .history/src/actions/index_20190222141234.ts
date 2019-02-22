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
export const LOAD_LOGIN = "LOAD_LOGIN";
export const loadLogin = () => createAction(LOAD_LOGIN);
