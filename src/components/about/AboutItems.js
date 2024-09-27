import React from 'react';

const Video = () => {
  return (
    <div className="video-container p-4">
      <video className='rounded-4'
        autoPlay
        loop
        controls="false"
        unmuted="true" // This doesn't actually work as an attribute in HTML
        style={{ width: '100%', height: 'auto' }}
      >
        <source src="media/potato-studio-final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export  default Video;