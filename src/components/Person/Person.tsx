import { useEffect, useState } from 'react';
import styles from './Person.module.css';
import axios from 'axios';

export default function Person() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    // console.log('Effect ran!');
    async function fetchCharacter() {
      const response = await axios.get(
        `https://swapi.dev/api/people/${count}/`
      );
      setPerson(response.data);
    }
    fetchCharacter();
    // axios
    //   .get(`https://swapi.dev/api/people/${count}/`)
    //   .then(response => {
    //     setPerson(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching person data:', error);
    //   });
  }, [count]);
  console.log('App rendered!');

  return (
    <div className={styles.wrapper}>
      <h3>The count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre className={styles.person}>{JSON.stringify(person, null, 2)}</pre>
    </div>
    //     <div className={styles.person}>
    //         {person && (
    //             <div>
    //                 <h2>{person.name}</h2>
    //                 <p>Height: {person.height}</p>
    //                 <p>Mass: {person.mass}</p>
    //             </div>
    //         )}
    //     </div>
  );
}
