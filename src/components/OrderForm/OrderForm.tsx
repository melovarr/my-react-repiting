import { useId } from 'react';
import styles from './OrderForm.module.css';

interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    const delivery = formData.get('delivery') as string;
    console.log('Delivery', delivery);

    onSubmit(username);
  };

  const fieldId = useId();
  return (
    <form action={handleSubmit} className={styles.orderForm}>
      <label htmlFor={`${fieldId}-username`}>Name:</label>
      <input
        type="text"
        name="username"
        id={`${fieldId}-username`}
        className={styles.userName}
      />
      <label htmlFor={`${fieldId}-usermail`}>Email:</label>
      <input
        type="email"
        name="usermail"
        id={`${fieldId}-usermail`}
        className={styles.userName}
      />
      <fieldset>
        <legend>Delivery method:</legend>
        <label>
          <input type="radio" name="delivery" value="courier" defaultChecked />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="pickup" />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>
      <button type="submit" className={styles.btn}>
        Place order
      </button>
    </form>
  );
}
