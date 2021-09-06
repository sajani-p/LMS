import React from "react";
import {ThemeProvider} from "styled-components"
import { BsBook } from "react-icons/bs";

import { Main, Footer} from "./components/Layout";
import { NavBar, NavItem,NavLink } from "./components/Navbar";

function App() {
  const theme = {
    primary:{
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
  };

  return (
    <ThemeProvider theme = {theme}>
      <NavBar>
        <NavItem href="#">
          <NavLink>
            <BsBook />
          </NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>Catalog</NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>DashBoard</NavLink>
        </NavItem>
      </NavBar>

      <Main>This is the main</Main>

      <Footer>This is the footer</Footer>
    </ThemeProvider>
  );
}

export default App;
