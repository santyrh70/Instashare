import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import './home.scss';
import { texts } from "../../constants/texts";
import { useEffect } from 'react';
import CardsContainer from '../../components/cardsContainer/CardsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getCurratedPhotos, getPhotosBySearchValue, setSearchValue } from '../../actions/actions';

const Home = () => {

  const dispatch = useDispatch();
  const currentAction = useSelector(store => store.pexelsApi.currentAction);
  const photos = useSelector(store => store.pexelsApi.photosPexels);
  const error = useSelector(store => store.pexelsApi.error);
  const loading = useSelector(store => store.pexelsApi.loading);
  const searchValue = useSelector(store => store.pexelsApi.searchValue);
  const currentPage = useSelector(store => store.pexelsApi.currentPage);
  const nextPageUrl = useSelector(store => store.pexelsApi.nextUrl);
  const prevPageUrl = useSelector(store => store.pexelsApi.prevUrl);

  const withoutResMssg = <h1>{texts.WITHOUT_RESULTS}</h1>

  useEffect(() => {
    dispatch(getCurratedPhotos());
  }, []);

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(getPhotosBySearchValue(searchValue));
    }
  }, [searchValue]);
  
  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearchValue(e.target.value));
    }
  }

  const renderImages = () => {
    return photos.length > 0 && photos.map(
      (image) => <Card imgData={image} key={image.id} />
    );
  }

  return (
    <div>
      <Navbar setSearchValue={handleSearchChange} />
      <CardsContainer>{loading === false && renderImages()}</CardsContainer>
      {loading === true && <div>Loading</div>}
      {error !== undefined && <div>ERROR</div>}
      <div>
        <button onClick={() => dispatch(getCurratedPhotos(prevPageUrl))} disabled={!prevPageUrl} >Prev</button>
        <span >Current Page {currentPage}</span>
        <button onClick={() => dispatch(getCurratedPhotos(nextPageUrl))} disabled={!nextPageUrl} >Next</button>
      </div>
    </div>
  );
}

export default Home;