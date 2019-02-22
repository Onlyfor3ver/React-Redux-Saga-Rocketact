const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
cosnt REQUEST_HELLOINFO = 'REQUEST_HELLOINFO';
const LOAD_HELLOINFO = 'LOAD_HELLOINFO';

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
