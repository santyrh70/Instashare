import "./CardsContainer.css";

const CardsContainer = ({ children }) => {

  return (
    <div className="card-container">
      <div className="cards">
        {children}
      </div>
    </div>
  )
}

export default CardsContainer