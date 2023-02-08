import { types } from '../actionsType';
import axios from 'axios';
import { pexelsApiAxios } from '../constants/pexelsApi';

export const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    searchValue: searchValue
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

export const getPhotosBySearchValue = (searchValue) => (dispatch) => {
  dispatch({
    type: types.LOADING_PHOTOS
  })

  pexelsApiAxios.get(`/search?query=${searchValue}&per_page=20`, {
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

export const getCurratedPhotos = (url) => (dispatch) => {

  const urlToFetch = !!url ? url : '/curated?per_page=20'

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
