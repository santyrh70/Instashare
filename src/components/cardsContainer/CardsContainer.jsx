import "./CardsContainer.scss";

const CardsContainer = ({ children, hide }) => {

  return (
    <div className={`card-container ${hide ? 'hide' : ''}`}>
      <div className="cards">
        {children}
      </div>
    </div>
  )
}

export default CardsContainer