import styles from './Layout.module.css';
import Auth from './Auth';
import Header from './Header';
import { useState } from 'react';

function Layout({isLoggedIn, onMode, setOnMode, children}){
  const [modal, setModal] = useState(false);
  
  return(
    <>
      {
        modal === true
        ? <Auth modal={modal} setModal={setModal} />
        : null
      }
      <div className={styles.container}>
        <Header 
          modal={modal}
          setModal={setModal}
          isLoggedIn={isLoggedIn}
          onMode={onMode}
          setOnMode={setOnMode}
        />
        <div className={styles.contents}>{children}</div>
      </div>
    </>
  )
}

export default Layout;