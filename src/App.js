import React from 'react';
import './styles/App.less'; 
import './styles/spinner.less'
import Spinner from './components/Spinner';
import Loader from './components/Loader';
import PlayerInfo from './components/PlayerInfo';
import TournamentItem from './components/TournamentItem';

function App() {
  return (
    <div className="app">
      <div className='content'>
      <h1 className='content__title'>Poker</h1> 
        <Spinner/>
        <PlayerInfo/>
        <Loader/>
        <TournamentItem/>
      </div>
    </div>
  );
}

export default App;