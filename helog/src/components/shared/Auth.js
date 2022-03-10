import styles from "./Auth.module.css";
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import { authService } from "../../fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';


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
    } catch(error){
      setError(error.message);
    }
  };

  // const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async(event) => {
    const {
      target: { name }
    } = event;
    let provider;

    try {
      if(name === "google"){
        provider = new GoogleAuthProvider();
      } else if(name === "github"){
        provider = new GithubAuthProvider();
      }
      const data = await signInWithPopup(authService, provider);
      console.log(data);
    } catch(error){
      console.log(error);
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
                  <button onClick={onSocialClick} name="google">Continue with Google</button>
                  <button onClick={onSocialClick} name="github">Continue with Github</button>
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