import styles from './Header.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { authService } from '../../fbase';

function Header({setModal, isLoggedIn, onMode, setOnMode}){
  
  const [onProfile, setOnProfile] = useState(false);
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return(
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>Helog</Link>
      <div className={styles.buttons}>
        <button className={styles.modeBtn} onClick={()=>{setOnMode(!onMode);}}>
          {
            onMode 
            ? <RiMoonFill className={styles.modeIcon} />
            : <BsFillSunFill className={styles.modeIcon} />
          }
        </button>
        <Link to="/search" className={styles.searchBtn}>
          <FiSearch className={styles.searchIcon} />
        </Link>
        {
          isLoggedIn? (
            <>
              <button className={styles.createBtn}>새 글 작성</button>
              <div className={styles.profileBox} onClick={()=>{setOnProfile(!onProfile);}}>
                <img className={styles.profile} />
                <MdOutlineArrowDropDown className={styles.down} />
              </div>
              {
                onProfile ? (
                  <div className={styles.profileMenu}>
                    <ul className={styles.menuWrapper}>
                      <li>
                        <a>내 벨로그</a>
                      </li>
                      <li>
                        <a>임시 글</a>
                      </li>
                      <li>
                        <a>읽기 목록</a>
                      </li>
                      <li>
                        <a>설정</a>
                      </li>
                      <li>
                        <a onClick={onLogOutClick}>로그아웃</a>
                      </li>
                    </ul>
                  </div>
                ):
                null
              }
            </>
          ):
          <button className={styles.loginBtn} onClick={()=>{setModal(true)}}>로그인</button>
        }
      </div>
    </div>
  )
}

export default Header;