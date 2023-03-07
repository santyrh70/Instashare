import { types } from "../actionsType";

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  userStatus: undefined,
  userId: undefined,
  currentUser: undefined,
  errorCode: '',
  errorMssg: ''
}

const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGING_IN:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn
      }
    case types.SIGNED_IN:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
        currentUser: action.currentUser,
        userStatus: action.userStatus,
      }
    case types.REGISTERING_NEW_USER:
      return {
        ...state,
        isRegistering: action.isRegistering
      }
    case types.NEW_USER_REGISTERED:
      return {
        ...state,
        currentUser: action.currentUser,
        userStatus: action.userStatus,
        isRegistering: action.isRegistering
      }
    case types.LOGOUT:
      return {
        ...state,
        currentUser: action.currentUser,
        userStatus: action.userStatus
      }
    case types.LOG_ERROR_REGISTER_NEW_USER:
      return {
        ...state,
        errorCode: action.errorCode,
        errorMssg: action.errorMssg
      }
    default:
      return state
  }
}

export default firebaseReducer;