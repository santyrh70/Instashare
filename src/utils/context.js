import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

  //user saved images array
  const [savedImagesArray, setSavedImagesArray] = useState([]);
  //images array from api
  const [apiImages, setApiImages] = useState([]);


  const addImages = (image) => {
    setSavedImagesArray((prevState) => prevState.includes(image) ? prevState : [...prevState, image])
  }

  const removeImages = (imageId) => {
    setSavedImagesArray((prevState) => {
      return prevState.filter(({id}) => id !== imageId);
    })
  }

  const findImageInSaved = (image) => {
    const aux = savedImagesArray.find(img => img.id === image.id);
    return typeof aux?.id !== 'undefined';
  }

  return(
    <Context.Provider value={{savedImagesArray, apiImages, setApiImages, addImages, removeImages, findImageInSaved}}>
      { children }
    </Context.Provider>
  )
}

export default Context; 