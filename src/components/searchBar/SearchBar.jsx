import { texts } from "../../constants/texts";

const SearchBar = ({setSearchValue}) => { 
  return (
    <input type="text" placeholder={texts.SEARCH} onKeyPress={setSearchValue}/>
  )
}

export default SearchBar;