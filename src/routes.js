import React from "react";

import { Route, Switch } from "react-router-dom";

import Container from './pages/Container/Container';
import BrasilCases from './pages/BrasilCases/BrasilCases';

export default function Routes() {
    return (
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/brasil" component={BrasilCases} />
        </Switch>
    );
  }