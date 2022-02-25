import styles from './Layout.module.css';
import Auth from './Auth';
import Header from './Header';
import { useState } from 'react';

function Layout({isLoggedIn, children}){
  const [modal, setModal] = useState(false);
  return(
    <>
      {
        modal
        ? <Auth/>
        : null
      }
      <div className={styles.container}>
        <Header modal={modal} setModal={setModal} isLoggedIn={isLoggedIn} />
        <div className={styles.contents}>{children}</div>
      </div>
    </>
  )
}

export default Layout;