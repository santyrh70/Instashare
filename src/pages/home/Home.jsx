import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import './home.scss';
import { texts } from "../../constants/texts";
import { images } from "../../assets/json/feed.js";
import { useState, useContext, useEffect } from 'react';
import { filterArray } from "../../utils/commonUtils";
import { pexelsApiAxios } from '../../constants/pexelsApi';
import Context from "../../utils/context";

const Home = () => {

  const { apiImages, setApiImages } = useContext(Context);
  const [imageArray, setImageArray] = useState(images);
  const [searchValue, setSearchValue] = useState('');
  const withoutResMssg = <h1>{texts.WITHOUT_RESULTS}</h1>

  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      setImageArray(filterArray(images, e.target.value)); 
    }
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  const renderImages = () => {
    return imageArray.map(
      (image) => <Card imgData={image} key={image.id}/>
    );
  }

  useEffect(() => {
    console.log(apiImages);
  }, [apiImages]);
  

  const callService = async () => {

    //put this in handleSearchValue
    try {
      //const response = await fetch(`${pexelsApi}/search?query=nature&per_page=1`, { method: 'GET', headers: { Authorization: process.env.REACT_APP_PEXELS_API_KEY } });
      //const data = await response.json();
      //console.log(data.photos);
      console.log(searchValue);
      const { data } = await pexelsApiAxios.get(`/search?query=${searchValue}&per_page=5`, {
        headers: { 'Authorization': process.env.REACT_APP_PEXELS_API_KEY }
      });

      setApiImages(data.photos);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Navbar setSearchValue={handleSearchChange} />
      <button onClick={callService}>Fetch Service</button>
      <div className="card-container">{imageArray.length === 0 ? withoutResMssg : renderImages()}</div>
    </div>
  );
}

export default Home;