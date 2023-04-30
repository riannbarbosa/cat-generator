import React, { useState } from 'react';
import CatFetch from './CatFetch';
import './RandomCats.css';

function RandomCats() {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
  const [catDisplay, setCatDisplay] = useState('');

  const btnCat = async () => {
    const cuteCat = await CatFetch();
    return setCatDisplay(cuteCat.data[0].url);
  };
  return (
    <div>
      <div className="buttonDiv">
        <button onClick={btnCat}>Meow me!</button>
      </div>
      <div className="imgCat">
        {catDisplay !== '' && <img alt="cat" src={catDisplay}></img>}
      </div>
    </div>
  );
}

export default RandomCats;
