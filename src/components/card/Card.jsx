import './card.scss'
import saveLogo from "../../assets/images/saveW.png"
import { useContext } from "react";
import Context from "../../utils/context";

const Card = ({ imgData }) => {
  const { addImages } = useContext(Context);

  return (
    <div className="feed-card">
      <img src={imgData.url}/>
      <div className="hide">
        <img className='save-logo' src={saveLogo} onClick={() => addImages(imgData)}/>
      </div>
    </div>
  );
}

export default Card;
