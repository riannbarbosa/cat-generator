import React from 'react';
import RandomCats from './components/RandomCats';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Random Cats Generator 🐈</h2>
        <p> Random cute cats generator, meowww!!</p>
      </header>
      <RandomCats />
      <footer>
        Made by with ❤️ by{' '}
        <a target="blank" href="https://www.github.com/riannbarbosa">
          Rian Barbosa
        </a>{' '}
        , credits to the{' '}
        <a target="blank" href="https://thecatapi.com/">
          API
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
