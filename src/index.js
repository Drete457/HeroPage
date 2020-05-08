import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroImage from './HeroImage';
import {HeroName, HeroBio} from './HeroInfo';
import {HeroWikipedia, HeroFanPage} from './HeroLink';
import * as serviceWorker from './serviceWorker';

function HeroPage() {
  return (
    <div className="MainBody">
      
    <div className="HeroInfo">
      <HeroImage />
      <HeroName />
      <HeroBio />
    </div>

    <div className="Links">
      <HeroWikipedia />
      <HeroFanPage />
    </div>

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HeroPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
