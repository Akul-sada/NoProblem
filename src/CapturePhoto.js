import React, { Children, useState } from 'react';


 const [index,setIndex] = useState(null);
 const changeIndex = function (){
  setIndex(1);
 } 
//  Allow photo capture permission from mobile and desktop device.
// Save the photo in static folder 
// Crop the photo



const CapturePhoto = () => {
  return (
    <>
      <div onClick={changeIndex}>{Children}</div>
    </>
  )
}

export default CapturePhoto;