import './pagination.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getCurratedPhotos } from "../../actions/actions";


const Pagintation = () => {
  const dispatch = useDispatch();
  const imagesPerPage = useSelector(store => store.pexelsApi.imagesPerPage);
  const currentPage = useSelector(store => store.pexelsApi.currentPage);
  const nextPageUrl = useSelector(store => store.pexelsApi.nextUrl);
  const prevPageUrl = useSelector(store => store.pexelsApi.prevUrl);
  const totalResults = useSelector(store => store.pexelsApi.totalResults);

  const totalPages = parseInt(totalResults/imagesPerPage);

  return (
    <div className='pagination-container'>
      <div className='pagination'>
        <button className='pagination__prev-bttn' onClick={() => dispatch(getCurratedPhotos(prevPageUrl, imagesPerPage))} disabled={!prevPageUrl} > {'<<'} </button>
        <span className='pagination__current-page'> <span className='focus'>{currentPage}</span> de {totalPages}</span>
        <button className='pagination__next-bttn' onClick={() => dispatch(getCurratedPhotos(nextPageUrl, imagesPerPage))} disabled={!nextPageUrl} > {'>>'} </button>
      </div>
    </div>
  )
}

export default Pagintation;