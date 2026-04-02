import type { Article } from '../../types/article';
import styles from './ArticleList.module.css';

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.objectId}>
          <a href={item.url} target="_blank" rel="noreferrer noopener">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
