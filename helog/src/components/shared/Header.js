import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { BsFillSunFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md'

function Header({isLoggedIn}){
  return(
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>Helog</Link>
      <div className={styles.buttons}>
        <button className={styles.modeBtn}>
          <BsFillSunFill className={styles.modeIcon} />
        </button>
        <Link to="/search" className={styles.searchBtn}>
          <FiSearch className={styles.searchIcon} />
        </Link>
        {
          isLoggedIn? (
            <>
              <button className={styles.createBtn}>
                새 글 작성
              </button>
              <div className={styles.profileBox}>
                <img className={styles.profile} />
                <MdOutlineArrowDropDown className={styles.down} />
              </div>
            </>
          ):
          <button className={styles.loginBtn}>로그인</button>
        }
      </div>
    </div>
  )
}

export default Header;