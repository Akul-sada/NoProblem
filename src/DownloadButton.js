import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // File URL
    const fileUrl = "./sound1.mp3"; // replace with your file's URL
    const fileName = "sound.mp3"; // optional file name for download

    // Create an anchor element and set attributes for download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    
    // Append anchor to the body temporarily to trigger download
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Download File</button>
  );
};

export default DownloadButton;