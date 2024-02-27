import React from 'react';
import { saveAs } from 'file-saver';

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('');
      const blob = await response.blob();
      saveAs(blob, 'cv.pdf');
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  return (
    <button className='text-white hover:text-orange rounded-md px-3 py-2 text-sm font-medium' onClick={handleDownload}>
      Get My CV
    </button>
  );
};

export default DownloadButton;