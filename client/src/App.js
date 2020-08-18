import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Routes from './components/routing/Routes';
import {Wrapper} from './elements/Container';
import Footer from './layout/Footer';
import TopBar from './layout/TopBar';
import NavBar from './layout/Navbar';
import Home from './components/sections/Home';

function App() {
  
  return (  
    <Wrapper>
        <TopBar/>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Routes/>
          </Switch>
        <Footer/>
      <GlobalStyle/>
    </Wrapper>
  );
}

export default App;

