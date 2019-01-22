import { createAction } from 'redux-actions';

import { ActionTypes } from '../constants/constants';

export const login = createAction({
  [ActionTypes.USER_LOGIN]: () => ({}),
});
