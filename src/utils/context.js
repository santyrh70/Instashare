import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [savedImagesArray, setSavedImagesArray] = useState([]);


  const addImages = (image) => {
    setSavedImagesArray((prevState) => prevState.includes(image) ? prevState : [...prevState, image])
  }

  return(
    <Context.Provider value={{savedImagesArray, addImages}}>
      { children }
    </Context.Provider>
  )
}

export default Context;