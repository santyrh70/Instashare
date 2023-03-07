import Navbar from '../../components/navbar/Navbar';
import Card from "../../components/card/Card";
import Dropdown from "../../components/dropdown/Dropdown";
import './home.scss';
import { texts } from "../../constants/texts";
import { useEffect } from 'react';
import CardsContainer from '../../components/cardsContainer/CardsContainer';
import Pagination from "../../components/pagination/Pagination";
import Spinner from "../../components/spinner/Spinner";
import { useSelector, useDispatch } from 'react-redux';
import { getCurratedPhotos, getPhotosBySearchValue, setSearchValue } from '../../actions/actions';

const Home = () => {

  const dispatch = useDispatch();
  const photos = useSelector(store => store.pexelsApi.photosPexels);
  const error = useSelector(store => store.pexelsApi.error);
  const loading = useSelector(store => store.pexelsApi.loading);
  const searchValue = useSelector(store => store.pexelsApi.searchValue);
  const currentPage = useSelector(store => store.pexelsApi.currentPage);
  const imagesPerPage = useSelector(store => store.pexelsApi.imagesPerPage);

  const withoutResMssg = <h1>{texts.WITHOUT_RESULTS}</h1>

  useEffect(() => {
    if (searchValue === '') {
      dispatch(getCurratedPhotos('', imagesPerPage, currentPage));
    }
  }, [currentPage, imagesPerPage, searchValue]);

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(getPhotosBySearchValue(searchValue, imagesPerPage));
    }
  }, [searchValue, imagesPerPage]);
  
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
      <div className='main'>
        <Dropdown/>
        {!loading && <CardsContainer >{renderImages()}</CardsContainer>}
        {!!loading && <Spinner/>}
        {error !== undefined && <div>ERROR</div>}
        <Pagination/>
      </div>
    </div>
  );
}

export default Home;