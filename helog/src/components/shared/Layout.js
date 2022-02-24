import styles from './Layout.module.css';
import Header from './Header';

function Layout({children}){
  return(
    <div className={styles.container}>
      <Header />
      <div className={styles.contents}>{children}</div>
    </div>
  )
}

export default Layout;