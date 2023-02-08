import { types } from "../actionsType";

const initialState = {
  savedImagesArray: [],
}

const savedImagesReducer = (state = initialState, action) => {
  let newSavedArray = [];
  switch (action.type) { 
    case types.SAVE_IMAGE:
      newSavedArray = state.savedImagesArray.includes(action.payload) ? state.savedImagesArray : [...state.savedImagesArray, action.payload];
      return {
        ...state,
        savedImagesArray: newSavedArray
      }
    case types.REMOVE_IMAGE:
      newSavedArray = state.savedImagesArray.filter(({id}) => id !== action.payload);
      return {
        ...state,
        savedImagesArray: newSavedArray
      }
    default:
      return state
  }
}

export default savedImagesReducer;