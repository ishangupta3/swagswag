// VideoPlayer.jsx
import React from 'react';
import dogvideo from '../assets/video/dogvideo2.mp4';

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className="video-player-container top-0 left-0 w-full z-40">
        <div className="text-center">
          <div className="inline-block">
            <video controls autoPlay muted className='width-full'>
              <source src={dogvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
