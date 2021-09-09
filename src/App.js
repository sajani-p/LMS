// third party libraries
import React from "react";
import {ThemeProvider} from "styled-components"
import { BsBook } from "react-icons/bs";

// presantational components
import { Main, Footer} from "./components/Layout";
import { NavBar, NavItem,NavLink } from "./components/Navbar";

// container components-logical components
import Dashboard from "./containers/Dashboard";

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

      <Main>This is the main
          <Dashboard/>
      </Main>

      <Footer>
        Copyright {new Date().getFullYear()} &copy; Spark Academy{" "}
      </Footer>
    </ThemeProvider>
  );
}

export default App;
