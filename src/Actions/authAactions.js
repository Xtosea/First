export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};
