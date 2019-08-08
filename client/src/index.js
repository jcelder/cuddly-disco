import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const songs = [
  {
    artistName: 'Test Artist',
    songName: 'Test Song, Please Ignore'
  },
  {
    artistName: 'Some Unknown Developer',
    songName: 'React is the best'
  },
  {
    artistName: 'The Artist Formerly known as $',
    songName: '$(".money")'
  }
];

ReactDOM.render(<App songs={songs} />, document.getElementById('app'));
