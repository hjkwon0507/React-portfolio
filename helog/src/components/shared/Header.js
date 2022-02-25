import styles from './Header.module.css';
import { BsFillSunFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md'

function Header({isLoggedIn}){
  return(
    <div className={styles.container}>
      <a className={styles.logo}>Velog</a>
      <div className={styles.buttons}>
        <button className={styles.modeBtn}>
          <BsFillSunFill className={styles.modeIcon} />
        </button>
        <a className={styles.searchBtn}>
          <FiSearch className={styles.searchIcon} />
        </a>
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