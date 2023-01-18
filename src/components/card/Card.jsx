import './card.scss'
import saveLogo from "../../assets/images/saveW.png"
import savedLogo from "../../assets/images/savedW.png"
import { useContext } from "react";
import Context from "../../utils/context";

const Card = ({ imgData }) => {
  const { addImages, removeImages, findImageInSaved } = useContext(Context);

  const imgSave = findImageInSaved(imgData);

  return (
    <div className="feed-card">
      <img src={imgData?.src.large}/>
      <div className="hide">
        <img className='save-logo' src={imgSave ? savedLogo : saveLogo} onClick={imgSave ? () => removeImages(imgData.id) : () => addImages(imgData)}/>
      </div>
    </div>
  );
}

export default Card;
