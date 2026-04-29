import { Field, Form, Formik, ErrorMessage, type FormikHelpers } from 'formik';
import { useId } from 'react';
import css from './FormikOrderForm.module.css';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Nsme too short')
    .max(50, 'Name too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  delivery: Yup.string()
    .oneOf(['pickup', 'courier', 'drone'], 'Invalid delivery method')
    .required('Delivery method is required'),
  restriction: Yup.array().of(Yup.string()),
  deliveryTime: Yup.string().required('Select delivery time'),
  message: Yup.string()
    .min(5, 'Message too short')
    .max(300, 'Message too long'),
});

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
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
          <ErrorMessage name="email" component="span" className={css.error} />
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
            <ErrorMessage
              name="restrictions"
              component="span"
              className={css.error}
            />
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
            <ErrorMessage
              name="delivery"
              component="span"
              className={css.error}
            />
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
          <ErrorMessage
            name="deliveryTime"
            component="span"
            className={css.error}
          />
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
          <ErrorMessage name="message" component="span" className={css.error} />
        </fieldset>
        <button className={css.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
