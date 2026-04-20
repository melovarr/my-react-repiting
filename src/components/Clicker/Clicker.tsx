import { useState } from 'react';
import styles from './Clicker.module.css';

export default function Clicker() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={styles.clicker}>
      <button className={styles.counter} onClick={handleClick}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}
