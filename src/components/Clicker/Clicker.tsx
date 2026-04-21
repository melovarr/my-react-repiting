import { useState, useEffect } from 'react';
import styles from './Clicker.module.css';

export default function Clicker() {
  const [clicks, setClicks] = useState(()=>{const savedClicks=window.localStorage.getItem('saved-clicks');
  if (savedClicks !== null){
    return JSON.parse(savedClicks);}
    return 0;
  });

  

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  useEffect(()=>{
    localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div className={styles.clicker}>
      <button className={styles.counter} onClick={handleClick}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}
