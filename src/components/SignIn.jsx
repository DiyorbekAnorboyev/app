import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Navigate ,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './Sign_In_Up.css'


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");
  
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoggedIn(true)
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  
    return (
      <div className="App">
        <img src="https://img.icons8.com/3d-fluency/150/null/instagram-new.png" alt=""/>
        <h2>Sign In</h2>
        <div className="inputs-reg">
          <input className="Min-input" autoComplete="off" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
          <input className="Min-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="Button-submit btn btn-outline-primary " onClick={handleSignIn}>Sign In</button>
        <p>Already have an account? <Link to="/">Sign Up</Link></p>
        {isLoggedIn && <Navigate to="/home"/>}
      </div>
    );
  }

  export default SignIn

