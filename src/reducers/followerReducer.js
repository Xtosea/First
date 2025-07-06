const initialState = {
  followers: 0,
};

const followerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FOLLOWER':
      return { ...state, followers: state.followers + 1 };
    default:
      return state;
  }
};

export default followerReducer;
