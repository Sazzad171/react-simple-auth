import { useState } from "react";

// for router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// css import
import "./assets/css/style.css"

// all components import
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import PrivateOutlet from "./components/PrivateOutlet";

import { Navbar, Nav, Container } from 'react-bootstrap'

function App() {

  // state
  const [ email, setEmail ] = useState("admin");
  const [ pass, setPass ] = useState("12345");

  return (
    <div className="App">
      <BrowserRouter>
        {/* header start */}
        <header>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Simple React Auth</Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                  <Link to="/" className="nav-link">Dashboard </Link>
                  <Link to="/settings" className="nav-link">Settings</Link>
                  <Link to="/profile" className="nav-link">Profile</Link>
                  <Link to="/login" className="nav-link">Login</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        {/* header end */}

        {/* body start */}
          <Routes>
            {/* root route */}
            <Route path="/" exact element={ <Dashboard /> } />

            {/* check auth */}
            <Route path="/*" element={ <PrivateOutlet /> }>
              {/* settings */}
              <Route path="settings" element={ <Settings /> } />

              {/* profile */}
              <Route path="profile" element={ <Profile /> } />
            </Route>

            {/* login */}
            <Route path="/login" element={ <Login /> } />

          </Routes>
        {/* body end */}

      </BrowserRouter>
    </div>
  );
}

export default App;
