import styles from "./Auth.module.css";
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import { authService } from "../../fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Auth({modal, setModal}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {target: {name, value}} = event;

    if(name === "email"){
      setEmail(value);
    } else if(name === "password"){
      setPassword(value);
    }
  };
  
  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      if(newAccount){
        // create account
        data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        // log in
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
      alert("회원가입이 완료되었습니다.")
    } catch(error){
      setError(error.message);
    }
  };

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
                <h2 className={styles.title}>{newAccount ? "회원가입" : "로그인"}</h2>
                <form 
                  onSubmit={onSubmit}
                  className={styles.upperWrapper}
                >
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required
                    value={email} 
                    onChange={onChange}
                  />
                  <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password} 
                    onChange={onChange}
                  />
                  <input type="submit"
                    value={newAccount ? "회원가입" : "로그인"}
                    onSubmit={onSubmit}
                  />
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