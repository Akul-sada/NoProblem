import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import sound from './sound1.mp3';

// import { initializeApp } from 'firebase/app';

// import WebCamCapture from './WebCamCapture';





function App() {
  const [problemName, setProblemName] = useState("");
  const [personName, setPersonName] = useState("");



  // Implementing collecting and counting IP address of users who are accessing the site starts




  // Implementing collecting and counting IP address of the users who are accessing the site ends 


  // const submitHandler = () => {
  //   setPersonName("");
  //   setProblemName("");
  // }
  // collect Ip host and hostname
  // const host = window.location.host;
  // const hostname= window.location.hostname;
  // console.log(window.location);

  /*
    Code to prevent double click below
  */
  // const onPreventDoubleClick  = debounce(onClick,300);

  /*
   Code to install to the mobile device Begins
  */

  /*
   Code to install to the mobile device ends
  */

  /*
    Code to take photograph of the user and Replace it with React logo starts
  */
  // Take a photograph of the user from users camera starts



  /*
    Code to take photograph of the user and Replace it with React logo starts
  */



  // If the 
  // Audio
  function play() {
    new Audio(sound).play();
    incrementSoundCount();

  }
  // Play count below

  const [soundCount, setSoundCount] = useState(0);

  function incrementSoundCount() {
    setSoundCount(soundCount + 1);
  }

  // modal handlers are below

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  // function to reload the page 
  function reload(){
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* modal code starts */}
        <div>
          <div className='top-green-btn'>

            <button onClick={openModal} className='green-btn'>Click here to make Payment</button>
            <button className='green-btn' onClick={() => play()} >Play the mantra</button>
            <span style={{ color: 'yellow' }}>{soundCount}</span>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{ background: 'red' }}
          >
            <div className='payment-modal'>


              <button className="close-payment btn" onClick={closeModal}>close</button>

              <h2>GooglePayNUMBER👉 +91-9964281778</h2>
              <img alt="GooglePayNUMBER👉+91-9964281778" style={{ maxWidth: '30%' }} src='./image.jpeg' />
            </div>
          </Modal>
        </div>

        {/* Modal code ends */}

        <h1 className='heading'>Fill in the form first then play the mantra 9 times then click on submit and your problem will be solved.</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <form className='form-gap'>
          <div className='form-controls'>
            <label name='person'>Full Name of the Person
            </label>
            <input id='person' required placeholder='example:- Ranveer Singh' style={{ marginLeft: '3.2rem' }} type='text' value={personName} onChange={(e) => setPersonName(e.target.value)} />
          </ div>
          <div className='form-controls'>
            <label name='problem'>Name of the problem
            </label>
            <input spellCheck="true" required id='problem' placeholder='example:- Heart or liver' style={{ marginLeft: '2rem' }} type='text' value={problemName} onChange={(e) => setProblemName(e.target.value)} />
          </div>
          {/* if increment count is equal to 0 activate te button or remove disabled */}

          {/* {soundCount >= 9 && <input className="green-btn center" type='submit' onSubmit={submitHandler}/>} */}
          <input className="green-btn center" type='submit' onSubmit={reload}/>
          
        </form>
        {/* <p style={{ color: 'yellow', fontSize: '3rem', margin: 0 }}>
        {personName} is free from {problemName} problems and all related issues.
        </p> */}
        <p className='problem-statement'>
          {personName} doesn't have {problemName} problem.
        </p>
      </header>
    </div>
  );
}


export default App;
