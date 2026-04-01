import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
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
      <input
        type="text"
        name="topic"
        placeholder="Search topic..."
        className={styles.topic}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
