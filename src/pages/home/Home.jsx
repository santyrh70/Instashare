import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import './home.scss';
import { texts } from "../../constants/texts";
import { useState, useContext, useEffect } from 'react';
import { pexelsApiAxios } from '../../constants/pexelsApi';
import Context from "../../utils/context";

const Home = () => {

  const { apiImages, setApiImages } = useContext(Context);
  const [searchValue, setSearchValue] = useState('');
  const withoutResMssg = <h1>{texts.WITHOUT_RESULTS}</h1>

  useEffect(() => {
    getCuratedImages();
  }, []);

  useEffect(() => {
    getImagesDepOnSearchValue();
  }, [searchValue]);

  useEffect(() => {
    console.log(apiImages);
  }, [apiImages])

  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
    }
  }

  const getImagesDepOnSearchValue = async () => {
    try {
      if (searchValue !== '') {
        const { data } = await pexelsApiAxios.get(`/search?query=${searchValue}&per_page=5`, {
          headers: {
            'Authorization': process.env.REACT_APP_PEXELS_API_KEY
          }
        });
        setApiImages(data.photos);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getCuratedImages = async () => {
    try {
      const { data } = await pexelsApiAxios.get(`/curated?per_page=5`, {
        headers: {
          'Authorization': process.env.REACT_APP_PEXELS_API_KEY
        }
      });
      setApiImages(data.photos);
    } catch (e) {
      console.log(e);
    }
  }

  const renderImages = () => {
    return apiImages.map(
      (image) => <Card imgData={image} key={image.id} />
    );
  }

  return (
    <div>
      <Navbar setSearchValue={handleSearchChange} />
      <div className="card-container">{renderImages()}</div>
    </div>
  );
}

export default Home;