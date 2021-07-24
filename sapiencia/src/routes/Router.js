import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagInicial from '../pages/PagInicial/PagInicial';
import Depoimentos from '../pages/Depoimentos/Depoimentos';
import QuemSomos from '../pages/QuemSomos/QuemSomos';
import Voluntarios from '../pages/Voluntarios/Voluntarios';
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
        <Route exact path="/depoimentos">
          <Depoimentos />
        </Route>
        <Route exact path="/quem-somos">
          <QuemSomos />
        </Route>
        <Route exact path="/voluntarios">
          <Voluntarios />
        </Route>
        <Route exact path="/sejaSapiente">
          <SejaSapiente />
        </Route>
        <Route>
          <PagErro />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default Router;
