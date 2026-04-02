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
import axios from 'axios';
import ArticleList from './ArticleList/ArticleList';
import { Audio } from 'react-loader-spinner';

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

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setIsLoading(false);
    setArticles(response.data.hits);
    console.log('Search results:', response.data);
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

      <h2>Place your order</h2>
      <OrderForm onSubmit={handleOrder} />

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
