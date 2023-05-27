import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import 'firebase/compat/auth';
import { Link,Navigate } from "react-router-dom";
import './Sign_In_Up.css'


function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedUp, setIsLoggedUp] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword( auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user
              updateProfile(user, { displayName: username });
              setIsLoggedUp(true)
          })
          .catch((error) => {
            console.log(error);
          });
        };

  return ( 
    <div className="App">
      <img src="https://img.icons8.com/3d-fluency/150/null/instagram-new.png" alt=""/>
      <h2>Sign Up</h2>
      <input className="Min-input" type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value.toLowerCase())} />
      <input className="Min-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
      <input className="Min-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="Button-submit btn btn-outline-primary " onClick={handleSignUp}>Sign Up</button>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      {isLoggedUp && <Navigate to="/home"/> }
    </div>
  );
}

export default SignUp

