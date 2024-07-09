'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Debes ingresar un email válido')
    .required('Debes ingresar un email válido'),
  message: Yup.string().required('No hay ningun mensaje'),
  nombre: Yup.string().required('Debes ingresar tu nombre'),
  numero: Yup.number()
    .typeError('Debes ingresar un numero válido')
    .required('Debes ingresar un numero'),
});

export function Formulario() {
  /* Server State Handling */
  const [serverState, setServerState] = useState<any>();
  const handleServerResponse = (ok: any, msg: any) => {
    setServerState({ ok, msg });
    setTimeout(() => setServerState(undefined), 3000);
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
        handleServerResponse(
          true,
          'Tu mensaje ha sido enviado, muchas gracias'
        );
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
    <div className="max-w-[1200px] m-4 lg:m-auto">
      <div className="flex lg:mt-22 mt-10">
        <h1 className="mb-6 font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Queremos escucharte
        </h1>
      </div>

      <div>
        <Formik
          initialValues={{ email: '', message: '', nombre: '', numero: '' }}
          onSubmit={handleOnSubmit}
          validationSchema={formSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form id="fs-frm" noValidate className="">
              <div className="flex flex-col mb-4">
                <label htmlFor="nombre" className="text-gray-600 ">
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
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-gray-600 mt-2   ">
                  Email
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
              <div className="flex flex-col mb-4">
                <label htmlFor="numero" className="text-gray-600 mt-2   ">
                  Número teléfonico
                </label>
                <Field
                  id="numero"
                  type="numero"
                  name="numero"
                  placeholder="Ej: 9 1234 5678"
                  className="p-2 mt-1 border-2 hover:border-blue-500 border-gray-400 rounded-md"
                />
                {errors.numero && touched.numero && (
                  <ErrorMessage
                    name="numero"
                    className="text-redprimary 600 mt-2"
                    component="p"
                  />
                )}
              </div>
              <div className="flex flex-col mb-4">
                <MyTextArea label="Mensaje" name="message" rows="6" />
              </div>
              <button
                className="bg-blueprimary transition ease-in-out delay-75     duration-300  rounded-md mb-20 lg:mb-40 hover:text-blueprimary hover:bg-white hover:border-blueprimary hover:border-4  mt-8 py-4 px-10 text-white text-lg "
                type="submit"
                disabled={isSubmitting}
              >
                Enviar Formulario
              </button>
              {serverState && (
                <p
                  className={`border-2 border-green-600 p-4  bg-green-200 text-green-900 my-4 mb-10 {serverState.ok ? '' : 'errorMsg'}`}
                >
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

const MyTextArea = ({ label, ...props }: any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-gray-600 mt-2   " htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        className=" p-2 mt-1 border-2 hover:border-blue-500 border-gray-400 rounded-md text-area"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-redprimary 600 mt-2">{meta.error}</div>
      ) : null}
    </>
  );
};
