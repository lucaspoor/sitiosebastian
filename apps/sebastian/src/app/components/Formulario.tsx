'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
  nombre: Yup.string().required('Required'),
});

export function Formulario() {
  /* Server State Handling */
  const [serverState, setServerState] = useState<any>();
  const handleServerResponse = (ok: any, msg: any) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (
    values: any,
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void }
  ) => {
    console.log({ values });
    axios({
      method: 'POST',
      url: 'https://formspree.io//p/2431245809828756720/f/contact',
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Thanks!');
      })
      .catch((error) => {
        actions.setSubmitting(false);
        if (error.response) {
          handleServerResponse(false, error.response.data.error);
        } else {
          handleServerResponse(false, error.message);
        }
      });
  };
  return (
    <div className="bg-orange-100 max-w-600 mt-20 mx-40 p-10">
      <Formik
        initialValues={{ email: '', message: '', nombre: '' }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form id="fs-frm" noValidate className="flex flex-col gap-5">
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <Field id="nombre" type="nombre" name="nombre" />
              {errors.nombre && touched.nombre && (
                <ErrorMessage
                  name="nombre"
                  className="errorMsg"
                  component="p"
                />
              )}
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" type="email" name="email" />
              {errors.email && touched.email && (
                <ErrorMessage name="email" className="errorMsg" component="p" />
              )}
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <Field id="message" type="message" name="message" />
              {errors.message && touched.message && (
                <ErrorMessage
                  name="message"
                  className="errorMsg"
                  component="p"
                />
              )}
            </div>

            <button
              className="bg-blue-900 py-4 px-10 text-white"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            {serverState && (
              <p className={!serverState.ok ? 'errorMsg' : ''}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
