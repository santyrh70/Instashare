import { types } from "../actionsType";

const initialState = {
  count: 0,
  currentAction: ''
}

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ONE_TO_COUNT:
      return {
        ...state,
        count: state.count+1,
        currentAction: types.ADD_ONE_TO_COUNT
      }
    
    case types.RESET_COUNT:
      return {
        ...state,
        count: 0,
        currentAction: types.RESET_COUNT
      }
    case types.SUBSTRACT_ONE_TO_COUNT:
      return {
        ...state,
        count: state.count-1,
        currentAction: types.SUBSTRACT_ONE_TO_COUNT
      }
    default:
      return state
  }
}

export default firstReducer;