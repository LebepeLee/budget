
import './App.css';
import React,{useState,useEffect} from 'react';
import Home from './components/home'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Login from './components/login'
import SignUp  from './components/signup';
import {collection,getDocs} from 'firebase/firestore'

function App() {
  const[transaction,setTransaction]= useState([]); 

  useEffect(()=>{
    
  })

const addTransaction=((amount, itemName, transactionType)=>{

setTransaction((item)=> [...item, {
  amount:amount,
  item:itemName,
  transactionType:transactionType,
}])
console.log(transaction)
})
  return(

   
    <div >

      <Router>
      <Switch>
        < Route exact path="/" component ={Login}></Route>
        < Route path="/Sign-up" component ={SignUp}></Route>
        < Route path="/Home">
        <Home  list={transaction}  add={addTransaction}/>
        </Route>
      </Switch>
   
    </Router> 
    </div>
  );
}

export default App;
