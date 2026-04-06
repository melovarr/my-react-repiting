import { useId } from 'react';
import styles from './OrderForm.module.css';

interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const selectId = useId();
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    const delivery = formData.get('delivery') as string;
    console.log('Delivery', delivery);
    const restrictions = formData.getAll('restrictions') as string[];
    console.log('Dietary restrictions:', restrictions);
    const deliveryTime = formData.get('deliveryTime') as string;
    console.log('Preferred delivery time:', deliveryTime);

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
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegetarian" />
          Vegetarian
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
        <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
        <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
      </select>
      <button type="submit" className={styles.btn}>
        Place order
      </button>
    </form>
  );
}
