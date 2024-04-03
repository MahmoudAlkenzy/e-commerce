import { useCashOrder } from '../../hooks/useCashOrder';
import { useCheackOutSession } from '../../hooks/useCheackOutSession';
import { SpinnerMini } from './../../ui/spinners/Spinners';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Payment() {
  const { createCashOrder, isCreating } = useCashOrder();
  const { cheackOutSession, isLoading } = useCheackOutSession();
  const paymentSchema = yup.object({
    details: yup.string().required().min(10, 'we need more details'),
    phone: yup
      .string()
      .required()
      .matches(/^01[125][0-9]{8}/, 'must be egyption number'),

    city: yup.string().required(),
  });
  const initialValues = {
    details: '',
    phone: '',
    city: '',
  };

  const { touched, errors, handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema: paymentSchema,
    onSubmit: (value) => createCashOrder({ shippingAddress: value }),
  });
  //   const shippingAddress = {
  //     details: detaildRef.current?.value,
  //     phone: phonedRef.current?.value,
  //     city: cityRef.current?.value,
  //   };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-50 mx-auto d-flex flex-column gap-3 py-5">
        <div>
          <label className="mb-1" htmlFor="details">
            details
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.details}
            placeholder="Enter your addres"
            className="form-control"
            id="details"
            type="text"
          />
          {errors.details && touched.details && <div className="alert-danger alert">{errors.details}</div>}
        </div>
        <div>
          <label className="mb-1" htmlFor="phone">
            phone
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            placeholder="Enter your phone"
            className="form-control"
            id="phone"
            type="text"
          />
          {errors.phone && touched.phone && <div className="alert-danger alert">{errors.phone}</div>}
        </div>
        <div>
          <label className="mb-1" htmlFor="city">
            city
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            placeholder=" enter your address"
            className="form-control"
            id="city"
            type="text"
          />
          {errors.city && touched.city && <div className="alert-danger alert">{errors.city}</div>}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            disabled={isCreating}
            // onClick={() =>
            //   createCashOrder(
            //     { shippingAddress },
            //     {
            //       onSuccess: () =>
            //         setTimeout(() => {
            //           navigae('/products');
            //         }, 1500),
            //     }
            //   )
            // }
            className="btn btn-main"
          >
            Place cash payment order
          </button>
          <button disabled={isLoading} onClick={cheackOutSession} className="btn btn-main">
            {isLoading ? <SpinnerMini /> : 'Check online session payment'}
          </button>
        </div>
      </div>
    </form>
  );
}
