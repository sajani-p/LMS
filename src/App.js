import React from "react";
import {Header, Main, Footer} from "./components/Layout";
import { NavBar, NavItem,NavLink } from "./components/Navbar";

function App() {
  return (
    <>
      <Header>
        <NavBar>
          <NavItem href="#">
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>DashBoard</NavLink>
          </NavItem>
        </NavBar>

      </Header>
      <Main>This is the main</Main>
      <Footer>This is the footer</Footer>
    </>
  );
}

export default App;
