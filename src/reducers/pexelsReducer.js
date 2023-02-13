import { types } from "../actionsType";

const initialState = {
  currentAction: '',
  loading: false,
  error: undefined,
  photosPexels: {},
  searchValue: '',
  nextUrl: '',
  prevUrl: '',
  currentPage: '',
  imagesPerPage: 20,
  total_results: 0
}

const pexelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      }
    case types.SET_NUM_IMAGES_PER_PAGE:
      return {
        ...state,
        imagesPerPage: action.imagesPerPage
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
        currentPage: action.payload.data?.page || '',
        totalResults: action.payload.data?.total_results
      }
    default:
      return state
  }
}

export default pexelsReducer;