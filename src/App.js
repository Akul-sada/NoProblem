import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import Modal from 'react-modal';
import sound from './static/sound1.mp3'


function play(){
  new Audio(sound).play()
}
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
      <button className='hidden' onClick={()=>play()}>Sound</button>
              {/* modal code starts */}
      <div>
      <button onClick={openModal} className='btn' style={{color:'white',border:'white',cursor:'pointer',background:'green'}}>Click here to make Payment</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{background:'red'}}
        contentLabel="Example Modal"
      >
        <img alt="Payment QR Code" style={{maxWidth:'300px'}} src='./image.jpg'/>
      <button onClick={closeModal} style={{position:'absolute',left:'344px',cursor:'pointer'}}>close</button>
      </Modal>
    </div>
    {/* Modal code ends */}   
        <h1>Fill in the form and your problem will be solved.</h1>  
        
        <img src={logo} className="App-logo" alt="logo" />
        <form className='form-gap'>
          <label>Name of the Person 👉
          <input required placeholder='eg:- Ranveer Singh' style={{marginLeft:'32px'}} type='text' value={personName} onChange={(e)=>setPersonName(e.target.value)}/>
          </label>
          <label>Name of the problem 👉
          <input required placeholder='eg:- Heart or liver' style={{marginLeft:'20px'}} type='text' value={problemName} onChange={(e)=>setProblemName(e.target.value)}/>
          </label>          
          <input style={{background:'green',border:'white',color:'#fff'}} type='submit' className='btn' onSubmit={submitHandler}/>
        </form>
        <p style={{color:'yellow',fontSize:'60px',margin:0}}>
          {personName} donot have {problemName} problem.
        </p>

      </header>
    </div>
  );
}

export default App;
