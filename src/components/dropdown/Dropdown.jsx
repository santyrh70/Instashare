import './dropdown.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setNumImagesPerPage } from '../../actions/actions';
import { useEffect, useState } from 'react';

const Dropdown = () => {

  const dispatch = useDispatch();
  const imagesPerPage = useSelector(store => store.pexelsApi.imagesPerPage);

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() =>{
    console.log(showDropdown);
  }, [showDropdown])

  const setImgPerPage = (numPerPage) => {
    setShowDropdown(false);
    dispatch(setNumImagesPerPage(numPerPage));
  }

  return (
    <div className='dropdown'>
      <div className='dropdown__button'>Imágenes por pagina</div>
      <div className={`dropdown__content ${showDropdown ? 'hide' : ''}`}>
        <div className='dropdown__item' onClick={() => setImgPerPage(5)}>5</div>
        <div className='dropdown__item' onClick={() => setImgPerPage(10)}>10</div>
        <div className='dropdown__item' onClick={()=>setImgPerPage(20)}>20</div>
        <div className='dropdown__item' onClick={()=>setImgPerPage(30)}>30</div>
        <div className='dropdown__item' onClick={()=>setImgPerPage(40)}>40</div>
      </div>
      <div className='dropdown__actual-img-per-page' onClick={() => setShowDropdown(true)}>
        {imagesPerPage}
      </div>
    </div>
  )
}

export default Dropdown;