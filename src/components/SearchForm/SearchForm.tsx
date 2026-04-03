import { useId } from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const topicId = useId();
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get('topic') as string;

    if (topic === '') {
      alert('Please enter search topic!');
      return;
    }
    onSubmit(topic);
  };
  return (
    <form action={handleSubmit} className={styles.searchForm}>
      <label htmlFor={topicId}>Enter search topic:</label>
      <input
        type="text"
        name="topic"
        id={topicId}
        placeholder="Search topic..."
        className={styles.topic}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
