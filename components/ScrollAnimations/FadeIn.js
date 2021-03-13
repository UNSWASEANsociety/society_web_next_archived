// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';

const FadeExample = ({ children }) => {
    return (
      <div>
        <Fade left>
          {children}
        </Fade>
      </div>
    );
}

export default FadeExample;
