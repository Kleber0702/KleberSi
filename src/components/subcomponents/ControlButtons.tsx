import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { MyFormValues } from '../Update';
import { FormikErrors } from 'formik';
import './ControlButtons.css'

type ControlButtonsProps = {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    steps: string[];
    isValid: boolean;
    isSubmitting: boolean;
    dirty: boolean;
    errors: Record<string, string>;
    setErrors: (errors: Record<string, string>) => void;
    setTouched: (touched: Record<string, boolean>) => void;
    validateForm: (values?: MyFormValues) => Promise<FormikErrors<MyFormValues>>;
  };
  

const ControlButtons = ({
  activeStep,
  setActiveStep,
  steps,
  isValid,
  isSubmitting,
  dirty,
  errors,
  setErrors,
  setTouched,
}: ControlButtonsProps) => {
  useEffect(() => {
    if (activeStep === 1) {
      setTouched({});
    } else if (activeStep === 2) {
      setErrors({});
      setTouched({});
    }
  }, [activeStep]);
  const handleBack = () => {
    console.log("Mundano")
  };
  const nextStep = () => {
    setErrors({});
    setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(prevStatus => prevStatus - 1);
    setErrors({});
  };
  return (
    <>
    <div className='si'>
      <div>
        <Button
          onClick={handleBack}
          variant='contained'
          color='error'
          startIcon={<ClearIcon />}
        >
          Cancelar
        </Button>
      </div>
      <div>
        <div>
          <Button
            disabled={activeStep === 0}
            variant='text'
            color='primary'
            onClick={prevStep}
            startIcon={<KeyboardArrowLeft />}
          >
            Anterior
          </Button>
        </div>
        <div>
          {activeStep === steps.length - 1 ? (
            <Button
              variant='contained'
              color='primary'
              disabled={!isValid || isSubmitting}
              startIcon={<SaveIcon />}
              type='submit'
            >
              Agregar
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              onClick={() => nextStep()}
              disabled={!(dirty && isValid && errors)}
              endIcon={<KeyboardArrowRight />}
            >
              Siguiente
            </Button>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default ControlButtons;