import { Field, Form, Formik, type FormikHelpers } from 'formik';
import { useId } from 'react';
import css from './FormikOrderForm.module.css';

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
  deliveryTime: '',
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
          <label htmlFor={`${fieldId}-deliveryTime`}>
            Preferred delivery time
          </label>
          <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
            <option value="">--Choose delivery time--</option>
            <option value="morning">Morning (8:00-12:00)</option>
            <option value="afternoon">Afternoon (12:00-16:00)</option>
            <option value="evening">Evening (16:00-20:00)</option>
          </Field>
        </fieldset>
        <button className={css.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
