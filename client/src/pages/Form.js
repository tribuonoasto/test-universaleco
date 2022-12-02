import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCustomer, updateCustomer } from "../store/actions/productActions";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ReactLoading from "react-loading";

export default function Home() {
  const { id } = useParams();

  const { customer } = useSelector((state) => state.customerReducer);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCustomer(id)).then((resp) => {
      setLoading(false);
      setForm(resp.customer);
    });
  }, []);

  if (loading) {
    return (
      <div className="loadingContainer d-flex justify-content-center align-items-center h-100">
        <ReactLoading
          type="spinningBubbles"
          color="#ff860d"
          height={400}
          width={200}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Any place in your app!</h1>

      <Formik
        initialValues={{
          firstName: form.firstName || "",
          lastName: form.lastName || "",
          email: form.email || "",
          gender: form.gender || "",
          addr: form.addr || [],
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.firstName) {
            errors.firstName = "Required";
          }

          if (!values.lastName) {
            errors.lastName = "Required";
          }

          if (!values.gender) {
            errors.gender = "Required";
          }

          if (!values.addr) {
            errors.addr = "Required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          dispatch(updateCustomer(values, id)).then(() => {
            navigate("/");
          });
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <br />

            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />

            <label htmlFor="gender">Gender</label>
            <Field type="text" name="gender" />
            <ErrorMessage name="gender" component="div" />
            <br />

            <label htmlFor="addr">Address</label>
            <FieldArray
              name="addr"
              render={(arrayHelpers) => (
                <div>
                  {values.addr &&
                    values.addr.length > 0 &&
                    values.addr.map((address, index) => (
                      <div className="mb-3" key={index}>
                        <label htmlFor={`addr.${index}.street`}>Street</label>
                        <Field name={`addr.${index}.street`} />
                        <br />
                        <label htmlFor={`addr.${index}.house`}>House</label>
                        <Field name={`addr.${index}.house`} />
                        <br />
                        <label htmlFor={`addr.${index}.city`}>City</label>
                        <Field name={`addr.${index}.city`} />
                        <br />
                        <label htmlFor={`addr.${index}.country`}>Country</label>
                        <Field name={`addr.${index}.country`} />
                        <br />
                      </div>
                    ))}
                </div>
              )}
            />
            <button type="submit">Submit</button>
            <Link to={"/"}>
              <button>Cancel</button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
