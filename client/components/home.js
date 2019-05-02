import React from 'react';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1><strong>Buy a keyboard wrist rest that perfectly compliments your style</strong></h1>
    <button onClick={()=> <Redirect to="/chat"></Redirect>} >Customer Service Chat</button>
    <Link to="/wood">get started </Link>
  </div>
);

export default Home;