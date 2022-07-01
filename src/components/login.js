import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {sendSignInLinkToEmail, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../config/firebase';
import React,{ useState } from 'react'

function Login (){

        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
    const  btn = {
        width:'150px',
        height:'30px',
        marginTop:'3%'
    }
    let history = useHistory();

    const login = (()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home")
        }).catch((error)=>{
            console.log(error)
        })
       
    })
    return(
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder ="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder ="enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button style={btn} onClick={login}>Login</button>

            <span>You do not have an account</span>
            <span><Link to="/Sign-up">Create an account</Link></span>
        </div>
    )
}
export default Login