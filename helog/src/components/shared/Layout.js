import styles from './Layout.module.css';
import Header from './Header';

function Layout({isLoggedIn, children}){
  return(
    <div className={styles.container}>
      <Header isLoggedIn={isLoggedIn} />
      <div className={styles.contents}>{children}</div>
    </div>
  )
}

export default Layout;