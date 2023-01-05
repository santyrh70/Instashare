import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [savedImagesArray, setSavedImagesArray] = useState([]);

  const [auxIamges, setAuxIamges] = useState([]);


  const addImages = (image) => {
    setSavedImagesArray((prevState) => prevState.includes(image) ? prevState : [...prevState, image])
  }

  const removeImages = (imageId) => {
    setSavedImagesArray((prevState) => {
      console.log(prevState.filter(({id}) => id !== imageId), prevState);
      return prevState.filter(({id}) => id !== imageId);
    })
  }

  const findImageInSaved = (image) => {
    return savedImagesArray.includes(image);
  }

  return(
    <Context.Provider value={{savedImagesArray, addImages, removeImages, findImageInSaved}}>
      { children }
    </Context.Provider>
  )
}

export default Context;