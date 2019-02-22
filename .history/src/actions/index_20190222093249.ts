const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

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

const createAction = (type: string, payload: any = {}): IAction => {
  return {
    type,
    ...payload
  };
};
