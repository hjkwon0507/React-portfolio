import { useState } from 'react';
import './App.css';
import Menu from "./Menu";
import Layout from "./shared/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Menu />
      <div>컨텐츠</div>
    </Layout>
  );
}

export default App;
