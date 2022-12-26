import userImg from '../../assets/images/user.png';
import './userImg.scss'

const UserImg = () => {
  return (
    <a href="user-profile">
      <img className="user-image" src={userImg} alt="Imagen perfil" />
    </a>
  );
}

export default UserImg;