import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagInicial from '../pages/PagInicial/PagInicial';
import Depoimentos from '../pages/Depoimentos/Depoimentos';
import QuemSomos from '../pages/QuemSomos/QuemSomos';
import Voluntarios from '../pages/Voluntarios/Voluntarios';
import PagErro from '../pages/PagErro/PagErro';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <PagInicial />
        </Route>
        <Route exact path='/depoimentos'>
          <Depoimentos />
        </Route>
        <Route exact path='/quem-somos'>
          <QuemSomos />
        </Route>
        <Route exact path='/voluntarios'>
          <Voluntarios />
        </Route>
        <Route>
          <PagErro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
