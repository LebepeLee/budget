import React ,{useState} from 'react'
import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'

function SignUp (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const signup= (()=>{

        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("/home");
        }).catch((error)=>{
            console.log(error);
        })
      
    })
    return(
        <div className="container">
            <h1>Sign Up</h1>
            <input type="email" placeholder ="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder ="enter your password"  onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button onClick={signup}>Sign Up</button>
        </div>
    )
}
export default SignUp