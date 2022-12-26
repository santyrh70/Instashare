import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import './home.scss';
import { texts } from "../../constants/texts";
import { images } from "../../assets/json/feed.js";
import { useState } from 'react';
import { filterArray } from "../../utils/commonUtils";

const Home = () => {
  const [imageArray, setImageArray] = useState(images);
  const withoutResMssg = <h1>{texts.WITHOUT_RESUTS}</h1>

  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      setImageArray(filterArray(images, e.target.value));
    }
  }

  const renderImages = () => {
    return imageArray.map(
      (image) => <Card imgData={image}/>
    );
  }

  return (
    <div>
      <Navbar setSearchValue={handleSearchChange}/>
      <div className="card-container">{imageArray.length === 0? withoutResMssg : renderImages()}</div>
    </div>
  );
}

export default Home;