import styles from './Menu.module.css';
import { MdTrendingUp } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Menu(){
  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.buttons}>
          <a className={styles.menuBtn}><MdTrendingUp className={styles.icon} />트렌딩</a>
          <a className={styles.menuBtn}><BiTimeFive className={styles.icon} />최신</a>
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