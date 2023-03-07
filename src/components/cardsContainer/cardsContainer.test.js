import { render, screen } from "@testing-library/react"
import CardsContainer from "./CardsContainer"

const renderComp = () => render(<CardsContainer> <button>Test</button></CardsContainer>);

describe('when cards container is rendered', () => {
  it('should display cards container div', () => {
    renderComp();
    const cardsContainer = screen.getByTestId('cardsContainer')
    expect(cardsContainer).toBeInTheDocument()
  })
  it('should display children element', () => {
    renderComp();
    const cardsContainerChildren = screen.getByRole('button')
    expect(cardsContainerChildren).toBeInTheDocument()
  })
})