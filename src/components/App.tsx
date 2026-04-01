// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from '../assets/hero.png';
import Alert from './Alert/Alert';
import Bookcase from './Bookcase';
import Product from './Product';
import Button from './Button/Button';
import UserMenu from './UserMenu/UserMenu';
import { useState } from 'react';
import ClickCounter from './ClickCounter/ClickCounter';
import ClickCounter2 from './ClickCounter2/ClickCounter2';
import ValuesUpdater from './ValuesUpdater/ValuesUpdater';

// let clicks = 0;
// const handleClick = () => {
//   console.log("I'am a button");
// };
// const handleClickSecondary = () => {
//   console.log("I'am a button too");
// };

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick2 = () => {
    setCount(count + 1);
  };
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked!', event);
    console.log('Target:', event.target); // сам <button>
  };
  const handleClickSecondary = () => {
    setClicks(clicks + 1);
    // clicks = clicks + 1;
    console.log(clicks);
  };
  return (
    <>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <UserMenu name="Serhii" />

      <Button variant="primary" text="Primary Login" onClick={handleClick} />
      <Button
        variant="secondary"
        text="Secondary Follow"
        onClick={handleClickSecondary}
      />

      <ClickCounter />
      <ClickCounter />

      <ClickCounter2 value={count} onUpdate={handleClick2} />
      <ClickCounter2 value={count} onUpdate={handleClick2} />

      <Button
        variant="primary"
        text={isOpen ? 'Hide Message' : 'Show Message'}
        onClick={toggleMessage}
      />

      <ValuesUpdater />

      <h1>Products</h1>

      <Product
        name="Tacos"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Burgers"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Product
        name="Salads"
        imgUrl="https://images.pexels.com/photos/1021109/pexels-photo-1021109.jpeg?w=640"
        price={8.99}
      />
      <Bookcase />
    </>
  );
}
