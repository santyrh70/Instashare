import "./CardsContainer.scss";

const CardsContainer = ({ children}) => {

  return (
    <div className='card-container' data-testid='cardsContainer'>
      <div className="cards">
        {children}
      </div>
    </div>
  )
}

export default CardsContainer