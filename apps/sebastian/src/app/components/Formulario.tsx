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
    <div className="border-gray-400 border-2 shadow-lg shadow-gray-400 rounded-lg max-w-600 mt-12 lg:mx-40  m-6">
      <div className="border-b-2 p-7 py-4 font-semibold text-2xl text-gray-700 border-gray-400  ">
        Formulario
      </div>
      <div className="p-7">
        <Formik
          initialValues={{ email: '', message: '', nombre: '' }}
          onSubmit={handleOnSubmit}
          validationSchema={formSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form id="fs-frm" noValidate className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="nombre"
                  className="text-gray-507  font-medium text-xl"
                >
                  Nombre
                </label>
                <Field
                  id="nombre"
                  className="p-2 mt-1 border-2 border-gray-400 rounded-md"
                  type="nombre"
                  name="nombre"
                />
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
                  <ErrorMessage
                    name="email"
                    className="errorMsg"
                    component="p"
                  />
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
                className="bg-blueprimary py-4 px-10 text-white text-lg font-medium"
                type="submit"
                disabled={isSubmitting}
              >
                Enviar Formulario
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
    </div>
  );
}
