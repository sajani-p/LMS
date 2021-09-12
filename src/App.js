// third party libraries
import React, { Suspense } from "react";
import {ThemeProvider} from "styled-components"
import { BsBook } from "react-icons/bs";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

// presantational components
import { Main, Footer, Header} from "./components/Layout";
import { NavBar, NavItem,NavLink } from "./components/Navbar";
import Spinner from "./components/Spinner";

// container components-logical components
import { DASHBOARD, CATALOG } from "./shared/routes";

const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard");
});

const NotFound = React.lazy(() => {
  return import("./containers/404");
});

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

  let routes = (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={DASHBOARD} component = {Dashboard} />
        <Route exact path={CATALOG} component = {Spinner} />
        <Route component = {NotFound} />
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme = {theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href={CATALOG}>
              <BsBook />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={CATALOG}>Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={DASHBOARD}>DashBoard</NavLink>
          </NavItem>
        </NavBar>
      </Header>

      <Main>
          <Router>
              {routes}
          </Router>
      </Main>

      <Footer>
        Copyright {new Date().getFullYear()} &copy; Spark Academy{" "}
      </Footer>
    </ThemeProvider>

  );
}

export default App;
