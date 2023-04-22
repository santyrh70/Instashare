import { types } from '../actionsType';
import { pexelsApiAxios } from '../constants/pexelsApi';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase_setup/firebase';

export const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    searchValue: searchValue
  }
}

export const setNumImagesPerPage = (numImagesPerPage) => {
  return {
    type: types.SET_NUM_IMAGES_PER_PAGE,
    imagesPerPage: numImagesPerPage
  }
}

export const saveImage = (image) => { 
  return {
    type: types.SAVE_IMAGE,
    payload: image
  }
}

export const removeImage = (image) => { 
  return {
    type: types.REMOVE_IMAGE,
    payload: image
  }
}

export const setSavedImagesArray = (image) => { 
  return {
    type: types.SAVE_IMAGE,
    payload: image
  }
}

export const logIn = (email, password) => (dispatch) => {
  dispatch({
    type: types.LOGGING_IN,
    isLoggingIn: true
  })
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({
        type: types.SIGNED_IN,
        isLoggingIn: false,
        currentUser: user,
        userStatus: 'logged',
      })
    })
    .catch((error) => {
      dispatch({
        type: types.LOGGING_IN_ERROR,
        isLoggingIn: false,
        errorCode: error.code,
        errorMssg: error.message,
      })
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
   
    });
}

export const logout = () => (dispatch) => {
  signOut(auth).then(() => {
    // Sign-out successful.
    dispatch({
      type: types.LOGOUT,
      currentUser: undefined,
      userStatus: undefined
    })
  }).catch((error) => {
    console.log(error)
  });
}

export const registerNewUser = (email, password) => (dispatch) => {
  dispatch({
    type: types.REGISTERING_NEW_USER,
    isRegistering: true
  });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in..
      const user = userCredential.user;
      dispatch({
        type: types.NEW_USER_REGISTERED,
        currentUser: user,
        userStatus: 'logged',
        isRegistering: false
      });
      console.log(user)
    })
    .catch((error) => {
      dispatch({
        type: types.LOG_ERROR_REGISTER_NEW_USER,
        errorCode: error.code,
        errorMssg: error.message 
      })
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
    });
}

export const getPhotosBySearchValue = (searchValue, numImagesPerPage, page) => (dispatch) => {
  dispatch({
    type: types.LOADING_PHOTOS
  })

  pexelsApiAxios.get(`/search?query=${searchValue}&page=${!!page ? page : '1'}&per_page=${numImagesPerPage}`, {
    headers: {
      'Authorization': process.env.REACT_APP_PEXELS_API_KEY
    }
  }).then((data) => {
      dispatch({
        type: types.SUCCESS_PHOTOS,
        payload: data
      })
    }
  ).catch((error) => {
    dispatch({
      type: types.ERROR_PHOTOS,
      payload: error
    })
  })
}

export const getCurratedPhotos = (url, imagesPerPage, page) => (dispatch) => {

  const urlToFetch = !!url ? url : `/curated/?page=${page}&per_page=${imagesPerPage}`;

  dispatch({
    type: types.LOADING_PHOTOS
  })

  pexelsApiAxios.get(urlToFetch, {
    headers: {
      'Authorization': process.env.REACT_APP_PEXELS_API_KEY2
    }
  }).then((data) => {
      dispatch({
        type: types.SUCCESS_PHOTOS,
        payload: data
      })
    }
  ).catch((error) => {
    dispatch({
      type: types.ERROR_PHOTOS,
      payload: error
    })
  })
}
