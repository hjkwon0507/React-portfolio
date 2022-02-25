import { useState } from 'react';
import './App.css';
import Layout from "./shared/Layout";
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';


import { Link, Route, Switch } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Route exact path="/" component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/setting" component={Profile}></Route>
      <Route path="/detail" component={Detail}></Route>
    </Layout>
  );
}

export default App;
