import { Field, Form, Formik, type FormikHelpers } from 'formik';
import { useId } from 'react';
import css from './FormikOrderForm.module.css';

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string;
  delivery: string;
  restrictions: string[];
  message: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
  deliveryTime: '',
  delivery: 'pickup',
  restrictions: [],
  message: '',
};

export default function FormikOrderForm() {
  const fieldId = useId();
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log('Order data:', values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client info</legend>
          <label className={css.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${fieldId}-username`}
          />
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`${fieldId}-email`}
          />
          <fieldset>
            <legend className={css.legend}>Restrictions</legend>
            <label htmlFor="" className={css.label}>
              <Field type="checkbox" name="restrictions" value="vegan" />
              Vegan
            </label>
            <label htmlFor="" className={css.label}>
              <Field type="checkbox" name="restrictions" value="gluten-free" />
              Gluten-free
            </label>
            <label htmlFor="" className={css.label}>
              <Field type="checkbox" name="restrictions" value="nut-free" />
              Nut-free
            </label>
          </fieldset>
          <fieldset>
            <legend className={css.legend}>Delivery by:</legend>
            <label className={css.label}>
              <Field type="radio" name="delivery" value="pickup" />
              Pickup
            </label>
            <label className={css.label}>
              <Field type="radio" name="delivery" value="courier" />
              Courier
            </label>
            <label className={css.label}>
              <Field type="radio" name="delivery" value="drone" />
              Drone
            </label>
          </fieldset>
          <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
            Preferred delivery time
          </label>
          <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
            <option className={css.option} value="">
              --Choose delivery time--
            </option>
            <option className={css.option} value="morning">
              Morning (8:00-12:00)
            </option>
            <option className={css.option} value="afternoon">
              Afternoon (12:00-16:00)
            </option>
            <option className={css.option} value="evening">
              Evening (16:00-20:00)
            </option>
          </Field>
          <label htmlFor={`${fieldId}-message`} className={css.label}>
            Comment or instructions
          </label>
          <Field
            as="textarea"
            name="message"
            id={`${fieldId}-message`}
            rows={5}
            className={css.textarea}
          />
        </fieldset>
        <button className={css.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
