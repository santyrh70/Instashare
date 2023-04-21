import { useTranslation } from "react-i18next";
import "./reactPortalFooter.scss"

const ReactPortalFooter = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <footer className="footer">
      <div className="languages-container">
        <button className="language-bttn" onClick={() => changeLanguage('es')}>{t('spanish')}</button>
        <button className="language-bttn" onClick={() => changeLanguage('en')}>{t('english')}</button>
        <button className="language-bttn" onClick={() => changeLanguage('de')}>{t('german')}</button>
      </div>
    </footer>
  )
}

export default ReactPortalFooter;