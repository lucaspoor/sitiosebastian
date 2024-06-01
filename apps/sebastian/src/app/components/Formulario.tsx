'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Debes ingresar un email válido')
    .required('Debes ingresar un email válido'),
  message: Yup.string().required('No hay ningun mensaje'),
  nombre: Yup.string().required('Debes ingresar tu nombre'),
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
    <div className="w-100 flex justify-center">
      <div className="  shadow-gray-400 rounded-lg  mt-12 lg:w-5/12  md:m-28 m- w-96">
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
              <Form id="fs-frm" noValidate className="">
                <div className="flex flex-col">
                  <label
                    htmlFor="nombre"
                    className="text-gray-600  font-medium text-xl"
                  >
                    Nombre
                  </label>
                  <Field
                    id="nombre"
                    className="p-2 mt-1 border-2 hover:border-blue-500 border-gray-400 rounded-md"
                    type="nombre"
                    name="nombre"
                    placeholder="Ej: Juan Perez"
                  />
                  {errors.nombre && touched.nombre && (
                    <ErrorMessage
                      name="nombre"
                      className="text-redprimary 600 mt-2"
                      component="p"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-600 mt-2  font-medium text-xl"
                  >
                    Email:
                  </label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ej: carlos123@gmail.com"
                    className="p-2 mt-1 border-2 hover:border-blue-500 border-gray-400 rounded-md"
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage
                      name="email"
                      className="text-redprimary 600 mt-2"
                      component="p"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-600 mt-2 font-medium text-xl"
                  >
                    Message:
                  </label>
                  <Field
                    id="message"
                    type="message"
                    placeholder="Ej: Hola buen dia, me gustaria decir..."
                    name="message"
                    className="p-2 pb-16 mt-1 border-2 hover:border-blue-500 border-gray-400 rounded-md"
                  />
                  {errors.message && touched.message && (
                    <ErrorMessage
                      name="message"
                      className="text-redprimary 600 mt-2"
                      component="p"
                    />
                  )}
                </div>
                <button
                  className="bg-blueprimary mb-10 hover:text-blue-600 hover:bg-blue-600  mt-8 py-4 px-10 text-white text-lg font-medium"
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
    </div>
  );
}
