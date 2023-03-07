import { useDispatch } from "react-redux";
import { logout } from "../../actions/actions";



const Logout = ({className}) => {

  const dispatch = useDispatch();

  return (
    <li className={className} onClick={() =>  dispatch(logout())}>Logout</li>
  )
}

export default Logout;