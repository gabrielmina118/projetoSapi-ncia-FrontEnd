import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagInicial from '../pages/PagInicial/PagInicial';
import PagErro from '../pages/PagErro/PagErro';
import Header from '../components/Header/Header';
import SideBar from '../components/Header/SideBar/SideBar';
import Footer from '../components/Footer/Footer';
import SejaSapiente from '../pages/SejaSapiente/SejaSapiente';

const Router = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <PagInicial />
        </Route>
        <Route exta path="/seja-sapiente">
          <SejaSapiente/>
        </Route>
        <Route>
          <PagErro />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
