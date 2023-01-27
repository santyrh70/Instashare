import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import './home.scss';
import { texts } from "../../constants/texts";
import { useState, useContext, useEffect } from 'react';
import { pexelsApiAxios } from '../../constants/pexelsApi';
import Context from "../../utils/context";
import CardsContainer from '../../components/cardsContainer/CardsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { addOneToCount, resetCount, substractOneToCount } from '../../actions/actions';

const Home = () => {

  const dispatch = useDispatch();
  const countValue = useSelector(store => store.countData.count);
  const currentAction = useSelector(store => store.countData.currentAction);

  const { apiImages, setApiImages } = useContext(Context);
  const [searchValue, setSearchValue] = useState('');
  const withoutResMssg = <h1>{texts.WITHOUT_RESULTS}</h1>

  useEffect(() => {
    getCuratedImages();
  }, []);

  useEffect(() => {
    getImagesDepOnSearchValue();
  }, [searchValue]);
  
  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
    }
  }

  const getImagesDepOnSearchValue = async () => {
    try {
      if (searchValue !== '') {
        const { data } = await pexelsApiAxios.get(`/search?query=${searchValue}&per_page=20`, {
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
    console.log('curated');
    try {
      const { data } = await pexelsApiAxios.get(`/curated?per_page=20`, {
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
      <span>{countValue}</span>
      <span>{currentAction}</span>
      <button onClick={() => dispatch(addOneToCount())}>+</button>
      <button onClick={() => dispatch(substractOneToCount())}>-</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
      <CardsContainer>{renderImages()}</CardsContainer>
    </div>
  );
}

export default Home;