// third party libraries
import React from "react";
import {ThemeProvider} from "styled-components"
import { BsBook } from "react-icons/bs";

// presantational components
import { Main, Footer, Header} from "./components/Layout";
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
    spacing: (factor) => `${factor * 8}px`,
  };

  return (
    <ThemeProvider theme = {theme}>
      <Header>
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
      </Header>

      <Main>
          <Dashboard/>
      </Main>

      <Footer>
        Copyright {new Date().getFullYear()} &copy; Spark Academy{" "}
      </Footer>
    </ThemeProvider>

  );
}

export default App;
