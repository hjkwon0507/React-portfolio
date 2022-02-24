import './App.css';
import Menu from "./Menu";
import Layout from "./shared/Layout";

function App() {
  return (
    <Layout>
      <Menu />
      <div>컨텐츠</div>
    </Layout>
  );
}

export default App;
