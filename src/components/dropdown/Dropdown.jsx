import './dropdown.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setNumImagesPerPage } from '../../actions/actions';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Dropdown = () => {

  const dispatch = useDispatch();
  const imagesPerPage = useSelector(store => store.pexelsApi.imagesPerPage);
  const { t, i18n } = useTranslation();

  const [showDropdown, setShowDropdown] = useState(false);

  const setImgPerPage = (numPerPage) => {
    setShowDropdown(false);
    dispatch(setNumImagesPerPage(numPerPage));
  }

  return (
    <div className='dropdown'>
      <div className='dropdown__button'>{t('dropdownPagination')}</div>
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