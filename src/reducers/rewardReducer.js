const initialState = {
  rewards: 0,
};

const rewardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AWARD_REWARDS':
      return { ...state, rewards: state.rewards + action.payload };
    default:
      return state;
  }
};

export default rewardReducer;
