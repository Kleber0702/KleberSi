import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Button,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

interface HeaderProps {
    steps: string[];
    activeStep: number;
  }

const Header = ({ steps, activeStep }: HeaderProps) => {
  const handleBack = () => {
    console.log("Hola mundo");
  };
  return (
    <div>
      <div>
        <div>
          <Button
            onClick={handleBack}
            color='primary'
            startIcon={<ArrowBackIosNewIcon />}
          >
            Volver
          </Button>
          <Typography variant='h4'>Agregar Usuario</Typography>
        </div>
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <Divider sx={{ width: '100%' }} />
    </div>
  );
};

export default Header;