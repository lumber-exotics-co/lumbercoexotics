import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './header';
import Home from './home';
import Chat from './Chat';
import WoodContainer from '../containers/woodContainer';
import StainContainer from '../containers/stainContainer';
import Success from './success';
import Cart from '../containers/cart';
import AnalyticsContainer from '../containers/analyticsContainer';
import './styles.css'




const App = () => {
  return (
    <Router>
      <div>
        <ul className="navList">
        <li className="listItems"><Link className="navLinks" to="/">Home</Link></li>
        <li className="listItems"><Link className="navLinks" to="/analytics">Analytics</Link></li>
        </ul>
        <div/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/wood" component={WoodContainer} />>
=======
          <Route exact path="/wood" component={WoodContainer} />
>>>>>>> 356be597571329706b843a017c66890d258b598b
          <Route exact path="/stain" component={StainContainer} />
          <Route exact path="/analytics" component={AnalyticsContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;