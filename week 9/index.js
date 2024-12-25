import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookEmojiCounter from './Facebookemoji'; 
import ToggleMode from './ToggleModeComponent'; 

ReactDOM.render(
  <React.StrictMode>
    {/* Facebook Counter */}
    <React.Fragment>
      <FacebookEmojiCounter type="like" />
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="Happy" />
      
      {/* Toggle */}
      <ToggleMode />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);