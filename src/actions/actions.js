import actionTypes, { types } from '../actionsType';

export const addOneToCount = () => ({
  type: types.ADD_ONE_TO_COUNT
})

export const resetCount = () => ({
  type: types.RESET_COUNT
})

export const substractOneToCount = () => ({
  type: types.SUBSTRACT_ONE_TO_COUNT
})