import Menu from "../components/Menu";
import { useState } from "react";
import Trending from "../components/Trending";
import Recent from "../components/Recent";

function Home(){
  const [currentMenu, setCurrentMenu] = useState(0);

  return(
    <>
      <Menu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      {
        currentMenu === 0 ? 
        (
          <Trending></Trending>
        ):
        <Recent></Recent>
      }
    </>
  );
}

export default Home;