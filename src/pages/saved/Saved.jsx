import Navbar from '../../components/navbar/Navbar'
import './saved.scss';
import { texts } from "../../constants/texts";
import { useContext, useState } from "react";
import Context from '../../utils/context';
import Card from "../../components/card/Card";
import { filterArray } from "../../utils/commonUtils";

const Saved = () => {

  const { savedImagesArray } = useContext(Context);
  const [imageArray, setImageArray] = useState(savedImagesArray);

  const withoutResMssg = <h4>{texts.WITHOUT_RESULTS}</h4>

  const renderImages = () => {
    return imageArray.map(
      (image) => <Card imgData={image}/>
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
      <div className="card-container">
        <h1>{savedImagesArray.length === 0? withoutResMssg : renderImages()}</h1>
      </div>
    </div>
  );
}

export default Saved;