import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import WoodContainer from '../containers/woodContainer';
// import Cart from './cart';

import StainContainer from '../containers/stainContainer';

const App = () => {
  return (
      <div>
        <Header />
        <WoodContainer />
        <StainContainer />
      </div>
  );
};

export default App;