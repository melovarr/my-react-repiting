import { useState } from 'react';
import styles from './ClickCounter.module.css';

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button className={styles.counter} onClick={handleClick}>
      Clicked:{clicks}
    </button>
  );
}
