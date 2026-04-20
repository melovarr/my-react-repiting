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
import OrderForm from './OrderForm/OrderForm';
import SearchForm from './SearchForm/SearchForm';
import ArticleList from './ArticleList/ArticleList';
import { Audio } from 'react-loader-spinner';
import { fetchArticles } from '../services/articleService';
import Person from './Person/Person';
import Timer from './Timer/Timer';
import Modal from './Modal/Modal';
import Clicker from './Clicker/Clicker';

// let clicks = 0;
// const handleClick = () => {
//   console.log("I'am a button");
// };
// const handleClickSecondary = () => {
//   console.log("I'am a button too");
// };

interface Article {
  objectId: string;
  title: string;
  url: string;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOrder = (data: string) => {
    console.log('Order received from:', data);
  };

  const handleSearch = async (topic: string) => {
    // console.log('Search topic:', topic);
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);

      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    //   console.log('Search results:', response.data);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <h2>Main content of the page.</h2>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2>Custom Modal Content</h2>
            <p>This is a reusable modal with dynamic content.</p>
          </Modal>
        )}
      </div>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <UserMenu name="Serhii" />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide timer' : 'Show timer'}
      </button>
      {isOpen && <Timer />}

      <Button variant="primary" text="Primary Login" onClick={handleClick} />
      <Button
        variant="secondary"
        text="Secondary Follow"
        onClick={handleClickSecondary}
      />

      <Clicker />

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

      <h2>Place your order</h2>
      <OrderForm onSubmit={handleOrder} />

      <h2>Person Information</h2>
      <Person />

      <h2>Search Topics</h2>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && (
        <Audio
          height={80}
          width={80}
          color="green"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
        />
      )}
      {isError && <p>Whoops,something went wrong! Please, try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}

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
