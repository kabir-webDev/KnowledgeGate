import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DirectionModal from './components/Direction/DirectionModal';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import OptionDetails from './components/OptionDetails/OptionDetails';
import Quiz from './components/Quiz/Quiz';

function App() {
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState('');
  const API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

  return (
    <div>
      <DirectionModal />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <HomePage setDifficulty={setDifficulty} setCategory={setCategory} />
          </Route>
          <Route path='/quiz'>
            <OptionDetails category={category} difficulty={difficulty} />
            <Quiz API_URL={API_URL} />
          </Route>
          <Route exact path='*'>
            <HomePage setDifficulty={setDifficulty} setCategory={setCategory} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
