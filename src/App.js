import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [problemName,setProblemName] = useState("");
  const [personName,setPersonName] = useState("");
  
  const submitHandler =()=>{
    setPersonName("");
    setProblemName("");
  }
  return (
    <div className="App">
  
      <header className="App-header">      
        <h1>Fill in the form and your problem will be solved</h1>  
        <img src={logo} className="App-logo" alt="logo" />
        <form className='form-gap'>
          <label>Name of the Person
          <input style={{marginLeft:'32px'}} type='text' value={personName} onChange={(e)=>setPersonName(e.target.value)}/>
          </label>
          <label>Name of the problem
          <input style={{marginLeft:'20px'}} type='text' value={problemName} onChange={(e)=>setProblemName(e.target.value)}/>
          </label>          
          <input style={{background:'green',border:'white',color:'#fff'}} type='submit' className='btn' onSubmit={submitHandler}/>
        </form>
        <p style={{color:'yellow'}}>
          {personName} donot have {problemName} problem.
        </p>
        
      </header>
    </div>
  );
}

export default App;
