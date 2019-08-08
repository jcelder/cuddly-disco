import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Playlist from './Playlist'
import AddSongForm from './AddSongForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    }
    this.addSong = this.addSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    axios.get('/api/songs')
    .then(({ data }) => {
      this.setState({
        songs: data
      })
    })
    .catch(console.log);
  }

  addSong(song) {
    const { songs } = this.state;
    const newSongs = songs.slice();

    axios.post('/api/songs', song)
      .then((response) => this.getSongs())
      .catch(console.log)
  }

  render() {
    const { songs } = this.state;
    return(
      <div className="container">
        <Header />
        <Playlist songs={songs} />
        <AddSongForm addSong={this.addSong}/>
      </div>
    );
  }
}

export default App;