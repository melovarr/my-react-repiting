import styles from './ClickCounter2.module.css';

interface ClickCounter2Props {
  value: number;
  onUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ClickCounter2({ value, onUpdate }: ClickCounter2Props) {
  return (
    <button className={styles.counter} onClick={onUpdate}>
      Clicked:{value}
    </button>
  );
}
