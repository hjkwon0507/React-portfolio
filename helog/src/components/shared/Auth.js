import styles from "./Auth.module.css";

function Auth(){
  return(
    <div className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.wrapper}>
          <div className={styles.gray-block}>

          </div>
          <div className={styles.white-block}>
            <div className={styles.exit-wrapper}>
              
            </div>
            <form>
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="submit" value="Log In" />
            </form>
          </div>
          <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;