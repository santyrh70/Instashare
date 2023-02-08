import './card.scss'
import saveLogo from "../../assets/images/saveW.png"
import savedLogo from "../../assets/images/savedW.png"
import { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Context from "../../utils/context";
import { saveImage, removeImage } from "../../actions/actions"
import { findValueInArrayById } from '../../utils/commonUtils'

const Card = ({ imgData }) => {

  const dispatch = useDispatch();
  const savedImagesArray = useSelector(store => store.savedImages.savedImagesArray);
  //const { addImages, removeImages, findImageInSaved } = useContext(Context);

  const imgSave = findValueInArrayById(savedImagesArray, imgData);

  return (
    <div className="feed-card">
      <img src={imgData?.src.large}/>
      <div className="hide">
        <img className='save-logo' src={imgSave ? savedLogo : saveLogo} onClick={imgSave ? () => dispatch(removeImage(imgData.id)) : () => dispatch(saveImage(imgData))}/>
      </div>
    </div>
  );
}

export default Card;
