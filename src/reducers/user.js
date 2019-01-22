import { handleActions } from 'redux-actions';
import { STATUS, ActionTypes } from '../constants/constants';

export const userState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
};

export default {
  user: handleActions(
    {
      [ActionTypes.USER_LOGIN]: state => (
        state,
        {
          status: { $set: STATUS.RUNNING },
        }
      ),
      [ActionTypes.USER_LOGIN_SUCCESS]: state => (
        state,
        {
          isAuthenticated: { $set: true },
          status: { $set: STATUS.READY },
        }
      ),
      [ActionTypes.USER_LOGOUT]: state => (
        state,
        {
          status: { $set: STATUS.RUNNING },
        }
      ),
      [ActionTypes.USER_LOGOUT_SUCCESS]: state => (
        state,
        {
          isAuthenticated: { $set: false },
          status: { $set: STATUS.IDLE },
        }
      ),
    },
    userState,
  ),
};
