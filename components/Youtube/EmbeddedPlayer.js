import React from 'react';
import YouTube from 'react-youtube';

const EmbeddedPlayer = ({ videoId }) => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
    };
    
    return (
      <div>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    );

}

export default EmbeddedPlayer;