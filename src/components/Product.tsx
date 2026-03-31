// import heroImg from '../assets/hero.png';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <img src={imgUrl} className="base" width="170" height="179" alt="" />
      <h2>{name}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
}
