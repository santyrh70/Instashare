import { types } from '../actionsType';
import { pexelsApiAxios } from '../constants/pexelsApi';

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
