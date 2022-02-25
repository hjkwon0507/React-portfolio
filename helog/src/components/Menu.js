import styles from './Menu.module.css';
import { MdTrendingUp } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Menu({currentMenu, setCurrentMenu}){
  
  function trending(){
    setCurrentMenu(0);
  }
  function recent(){
    setCurrentMenu(1);
  }

  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.buttons}>
          <a className={currentMenu === 0 ? styles.active : styles.menuBtn} onClick={trending}>
            <MdTrendingUp className={styles.icon} />
            트렌딩
          </a>
          <a className={currentMenu === 1 ? styles.active : styles.menuBtn} onClick={recent}>
            <BiTimeFive className={styles.icon} />
            최신
          </a>
        </div>
        <div className={styles.sort}>이번 주<MdOutlineArrowDropDown className={styles.down} /></div>
      </div>
      <div className={styles.right}>
        <BsThreeDotsVertical className={styles.more} />
      </div>
    </div>
  )
  
}

export default Menu;