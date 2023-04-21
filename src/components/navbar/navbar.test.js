import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import { texts } from "../../constants/texts";
import Navbar from "./Navbar"

import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux'
import store from "../../store";

//The component needs the Provider to access the REAL store
//It also needs to be wrapped with Router to allow Link components works
const renderComp = () => render(<Provider store={store}><Router><Navbar/></Router></Provider>);

describe('when Navbar is rendered', () => {
  it('should display "Home" link', () => {
    renderComp();
    //screen.debug();
    const homeLinks = screen.getAllByText(texts.HOME);
    expect(homeLinks[0]).toBeInTheDocument()
    //expect(homeLinks).not.toBeInTheDocument()

    //homeLinks[1] is also visible because when the component is virtualy rendered, 
    //it hasn't an screen size set, so the media queries doesn't apply
    expect(homeLinks[1]).toBeVisible() 
  })
})