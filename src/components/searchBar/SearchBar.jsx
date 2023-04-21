import { useTranslation } from "react-i18next";
import { texts } from "../../constants/texts";

const SearchBar = ({setSearchValue}) => { 
  const { t, i18n } = useTranslation();
  return (
    <input type="text" placeholder={t('search')} onKeyPress={setSearchValue}/>
  )
}

export default SearchBar;