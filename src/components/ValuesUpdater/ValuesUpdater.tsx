import { useState } from 'react';
import styles from './ValuesUpdater.module.css';

interface Values {
  x: number;
  y: number;
}

export default function ValuesUpdater() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  //   const updateX = () => {
  //     setValues({
  //       ...values,
  //       x: values.x + 1,
  //     });
  //   };

  //   const updateY = () => {
  //     setValues({
  //       ...values,
  //       y: values.y + 1,
  //     });
  //   };

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <p className={styles.value}>x: {values.x},</p>
        <p className={styles.value}>y: {values.y}</p>
      </div>
      <button className={styles.updater} onClick={() => updateValue('x')}>
        Update x
      </button>
      <button className={styles.updater} onClick={() => updateValue('y')}>
        Update y
      </button>
    </div>
  );
}
