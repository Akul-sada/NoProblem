import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import Modal from 'react-modal';





function App() {
  const [problemName,setProblemName] = useState("");
  const [personName,setPersonName] = useState("");

  
  const submitHandler =()=>{
    setPersonName("");
    setProblemName("");
  }

  // modal handlers are below

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div className="App">

      <header className="App-header">   

              {/* modal code starts */}
      <div>
      <button onClick={openModal} className='green-btn'>Click here to make Payment</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{background:'red'}}
      >
      <div className='payment-modal'>


        <button className="close-payment btn" onClick={closeModal}>close</button>

        <img alt="GooglePayNUMBER-9964215560" style={{maxWidth:'100%'}} src='./image.jpg'/>
      </div>
      </Modal>
    </div>
    {/* Modal code ends */}   
        <h1 className='heading'>Fill in the form and your problem will be solved.</h1>  
        
        <img src={logo} className="App-logo" alt="logo" />
        <form className='form-gap'>
          <label>Full Name of the Person 👉
          <input required placeholder='example:- Ranveer Singh' style={{marginLeft:'3.2rem'}} type='text' value={personName} onChange={(e)=>setPersonName(e.target.value)}/>
          </label>
          <label>Name of the problem 👉
          <input required placeholder='example:- Heart or liver' style={{marginLeft:'2rem'}} type='text' value={problemName} onChange={(e)=>setProblemName(e.target.value)}/>
          </label>          
          <input className="green-btn center" type='submit' onSubmit={submitHandler}/>
        </form>
        <p style={{color:'yellow',fontSize:'3rem',margin:0}}>
          {personName} donot have {problemName} problem.
        </p>
      </header>
    </div>
  );
}

export default App;
