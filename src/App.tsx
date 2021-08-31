import React from 'react';
import Body from './body/containers/Body';
import Footer from './footer/containers/Footer';
import { Header } from './header/containers/Header';
import './App.css';

const App = () => <div className="App">
  <Header />
  <Body />
  <Footer />
</div>

export default App;
