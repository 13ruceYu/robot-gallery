import React from 'react';
import style from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

function App() {
  return (
    <div className={style.app}>
      <div className={style.robotList}>
        {robots.map(r => <Robot id={r.id} name={r.name} email={r.email}></Robot>)}
      </div>
    </div>
  );
}

export default App;
