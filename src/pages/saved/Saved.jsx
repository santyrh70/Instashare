import Navbar from '../../components/navbar/Navbar'
import './saved.scss';
import { texts } from "../../constants/texts";
import { useContext, useState, useEffect } from "react";
import Context from '../../utils/context';
import Card from "../../components/card/Card";
import { filterArray } from "../../utils/commonUtils";
import CardsContainer from '../../components/cardsContainer/CardsContainer';

const Saved = () => {

  const { savedImagesArray } = useContext(Context);
  const [imageArray, setImageArray] = useState(savedImagesArray);

  useEffect(() => {
    setImageArray(savedImagesArray);
  
  }, [savedImagesArray])
  
  const withoutResMssg = <h4>{texts.WITHOUT_RESULTS}</h4>

  const renderImages = () => {
    return imageArray.map(
      (image) => <Card imgData={image} key={image.id}/>
    );
  }

  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      setImageArray(filterArray(savedImagesArray, e.target.value));
    }
  }

  return (
    <div>
      <Navbar setSearchValue={handleSearchChange}/>
      <CardsContainer>
        {savedImagesArray.length === 0 ? withoutResMssg : imageArray.length === 0 ? withoutResMssg : renderImages()}
      </CardsContainer>
    </div>
  );
}

export default Saved;