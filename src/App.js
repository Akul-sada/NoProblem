import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import Modal from 'react-modal';
import sound from './sound1.mp3';




function App() {
  const [problemName,setProblemName] = useState("");
  const [personName,setPersonName] = useState("");

  const submitHandler =()=>{
    setPersonName("");
    setProblemName("");
  }

  


  
  /*
   Code to install to the mobile device Begins
  */







  /*
   Code to install to the mobile device ends
  */

  // Audio
  function play(){
    new Audio(sound).play();
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
      <div className='top-green-btn'>
        <button onClick={openModal} className='green-btn'>Click here to make Payment</button>
        <button className='green-btn' onClick={()=>play()}>Play the mantra</button>
         
        <DownloadButton/>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{background:'red'}}
      >
      <div className='payment-modal'>


        <button className="close-payment btn" onClick={closeModal}>close</button>

        <img alt="GooglePayNUMBER👉+91-9964215560" style={{maxWidth:'100%'}} src='./image.jpg'/>
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
