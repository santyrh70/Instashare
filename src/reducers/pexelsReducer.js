import { types } from "../actionsType";

const initialState = {
  currentAction: '',
  loading: false,
  error: undefined,
  photosPexels: {},
  searchValue: '',
  nextUrl: '',
  prevUrl: '',
  currentPage: ''
}

const pexelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      }
    case types.ERROR_PHOTOS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case types.LOADING_PHOTOS:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS_PHOTOS:
      return {
        ...state,
        photosPexels: action.payload?.data?.photos,
        loading: false,
        nextUrl: action.payload.data?.next_page?.split('https://api.pexels.com/v1')[1] || '',
        prevUrl: action.payload.data?.prev_page?.split('https://api.pexels.com/v1')[1] || '',
        currentPage: action.payload.data?.page || ''
      }
    default:
      return state
  }
}

export default pexelsReducer;