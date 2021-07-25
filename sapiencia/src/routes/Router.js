import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagInicial from '../pages/PagInicial/PagInicial';
import PagErro from '../pages/PagErro/PagErro';
import SejaSapiente from '../pages/SejaSapiente/SejaSapiente';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PagInicial />
        </Route>
        <Route exact path="/seja-sapiente">
          <SejaSapiente />
        </Route>
        <Route>
          <PagErro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
