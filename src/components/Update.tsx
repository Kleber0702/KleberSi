import { Form, Formik, FormikValues, FormikHelpers, FormikState, FormikProps } from 'formik';
import GeneralData from './subcomponents/GeneralData';
import Direction from './subcomponents/Direction';
import * as yup from 'yup';
import Header from './subcomponents/Header';
import { useState } from 'react';
import ControlButtons from './subcomponents/ControlButtons';

      const steps = ['Datos Generales', 'Dirección'];

      const getFormContent = (activeStep: number, formik: FormikProps<MyFormValues>) => {
        switch (activeStep) {
          case 0: return <GeneralData formik={formik} />
          case 1: return <Direction formik={formik} />
        }
      }

      export interface Step0Values {
        name: string;
        last_name: string;
        username: string;
        password: string;
        area: string;
        roll: string;
        supervisor: string;
      }

      export interface Step1Values {
        street: string;
        avenue: string;
        internal_number: number;
        external_number: number;
        colony: string;
        city: string;
        state: string;
        postal_code: number;
        lot: number;
        manzana: number;
      }

      const step0Schema: yup.Schema<Step0Values> = yup.object().shape({
        
        name:
          yup.string()
            .min(6)
            .required('Nombre del usuario es requerido'),
        last_name:
          yup.string()
            .min(3)
            .required("Apellido del usuario es requerido"),
        username:
          yup.string()
            .min(3)
            .required("Nombre de usuario es requerido"),
        password:
          yup.string()
            .min(8)
            .required("Contraseña requerida"),
        area:
          yup.string()
            .required("Area requerida"),
        roll:
          yup.string()
            .required("El roll es necesario"),
        supervisor:
            yup.string()
              .required("El roll es necesario")
              
      });

      const step1Schema: yup.Schema<Step1Values> = yup.object().shape({
        street:
          yup.string()
            .required('Calle es requerida'),
        avenue:
          yup.string()
            .required("Avenia requerida"),
        internal_number:
          yup.number()
            .required("Número interno requerido"),
        external_number:
          yup.number()
            .required("Número externo requerido"),
        colony:
          yup.string()
            .required("Colonia requerida"),
        city:
          yup.string()
            .required("La ciudad es necesaria"),
        state:
          yup.string()
            .required("El estado es requerido"),
        lot:
        yup.string()
        .required("El lote es requerido"),
        manzana:
          yup.number()
          .required("El manzana es requerido")
      });

      const schemaArray: yup.Schema<Step0Values | Step1Values>[] = [step0Schema, step1Schema]

      export interface MyFormValues {
        name: string;
        last_name: string;
        username: string;
        password: string;
        area: string;
        roll: string;
        supervisor: string;
        
        street: string;
        postal_code: string;
        manzana: number;
        external_number: number;
        state: string;
        avenue: string;
        colony: string;
        internal_number: number;
        lot: number;
        city: string;
        
      }

      const initialValues: MyFormValues = {
        name: "",
        last_name: "",
        username: "",
        password: "",
        area: "",
        roll: "",
        supervisor: "",
        street: "",
        avenue: "",
        internal_number: 0,
        external_number: 0,
        colony: "",
        city: "",
        state: "",
        postal_code: "",
        manzana: 0,
        lot: 0,
      }


      const Update = () => {
        const [activeStep, setActiveStep] = useState(0);

        const submitHandler = async (values: FormikValues, actions: Partial<FormikHelpers<MyFormValues>>) => {

        };

        return (
          <div>
            <Header steps={steps} activeStep={activeStep} />
            <Formik
              enableReinitialize={false}
              initialValues={initialValues}
              validationSchema={schemaArray[activeStep]}
              onSubmit={(values: MyFormValues, { resetForm, setSubmitting }: FormikHelpers<MyFormValues>) => submitHandler(values, { resetForm, setSubmitting })}
            >
              {
                formik => {
                  return (
                    <Form>
                      <div>
                        {getFormContent(activeStep, formik)}
                      </div>
                      <div>
                        <ControlButtons
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                          steps={steps}
                          isValid={formik.isValid}
                          isSubmitting={formik.isSubmitting}
                          dirty={formik.dirty}
                          errors={formik.errors}
                          validateForm={formik.validateForm}
                          setErrors={formik.setErrors}
                          setTouched={formik.setTouched}
                        />
                      </div>
                    </Form>
                  )
                }
              }
            </Formik>
          </div>
        )
      }

      export default Update
