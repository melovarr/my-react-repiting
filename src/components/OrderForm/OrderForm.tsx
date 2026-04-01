import styles from './OrderForm.module.css';

interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    onSubmit(username);
  };

  return (
    <form action={handleSubmit} className={styles.orderForm}>
      <input type="text" name="username" className={styles.userName} />
      <button type="submit" className={styles.btn}>
        Place order
      </button>
    </form>
  );
}
