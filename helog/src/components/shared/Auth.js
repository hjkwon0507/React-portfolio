import styles from "./Auth.module.css";
import { AiOutlineClose } from 'react-icons/ai'

function Auth({modal, setModal}){
  return(
    <div className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.wrapper}>
          <div className={styles.grayBlock}>

          </div>
          <div className={styles.whiteBlock}>
            <div className={styles.exitWrapper}>
              <AiOutlineClose className={styles.icon} onClick={()=>{setModal(false);}} />
            </div>
            <div className={styles.blockContent}>
              <div className={styles.content}>
                <h2 className={styles.title}>로그인</h2>
                <form className={styles.upperWrapper}>
                  <input type="text" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <input type="submit" value="Log In" />
                </form>
                <div>
                  <button>Continue with Google</button>
                  <button>Continue with Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;