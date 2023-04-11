import {
    MenuItem,
    TextField,
  } from '@mui/material';
  import { Field, FormikProps, FormikValues } from 'formik';
import { MyFormValues } from '../Update';
import { useState } from 'react';
import './GeneralData.css'
import Container from '@mui/material/Container/Container';
import Stack from '@mui/material/Stack/Stack';
interface props {
  formik: FormikProps<MyFormValues>
}
  
const GeneralData = ({formik}: props) => {
  const [key, setKey] = useState('');
  return (
    <>
    
   <div className="container1">
      <div className='column_left'>
      <Field
        label='Nombre'
        variant='standard'
        sx={{ width: '100%' }}
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        as={TextField}
      ></Field>
      
      <Field
        select
        id='outlined-basc'
        label='Area'
        variant='standard'
        sx={{ width: "100%" }}
        name='area'
        value={formik.values.area}
        onChange={formik.handleChange}
        error={formik.touched.area && Boolean(formik.errors.area)}
        helperText={formik.touched.area && formik.errors.area}
        as={TextField}
      >
        <MenuItem key={"A1"} value={"Ventas"}>
          Ventas
        </MenuItem>
        <MenuItem key={"A2"} value={"Operaciones"}>
          Operaciones
        </MenuItem>
        <MenuItem key={"A3"} value={"Diseño"}>
          Diseño
        </MenuItem>
        <MenuItem key={"A3"} value={"Call Center"}>
          Call Center
        </MenuItem>
      </Field>
      
      
      <Field
        select
        id='outlined-basc'
        label='Supervisor'
        variant='standard'
        sx={{ width: "100%" }}
        name='supervisor'
        value={formik.values.supervisor}
        onChange={formik.handleChange}
        error={formik.touched.supervisor && Boolean(formik.errors.supervisor)}
        helperText={formik.touched.supervisor && formik.errors.supervisor}
        as={TextField}
      >
        <MenuItem key={"A1"} value={"Supervisor 1"}>
          Supervisor 1
        </MenuItem>
        <MenuItem key={"A2"} value={"Supervisor 2"}>
          Supervisor 2
        </MenuItem>
        <MenuItem key={"A3"} value={"Supervisor 3"}>
          Supervisor 3
        </MenuItem>
      </Field>
      
      </div>
      
      <div className="column_rigth">
      <Field
        label='Apellido'
        variant='standard'
        sx={{ width: "100%" }}
        name='last_name'
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        helperText={formik.touched.last_name && formik.errors.last_name}
        as={TextField}
      ></Field>
      <Field
        select
        id='outlined-basc'
        label='Rol'
        variant='standard'
        sx={{ width: "100%" }}
        name='roll'
        value={formik.values.roll}
        onChange={formik.handleChange}
        error={formik.touched.roll && Boolean(formik.errors.roll)}
        helperText={formik.touched.roll && formik.errors.roll}
        as={TextField}
      >
        <MenuItem key={"A1"} value={"Gerente"}>
          Gerente
        </MenuItem>
        <MenuItem key={"A2"} value={"Supervisor"}>
          Supervisor
        </MenuItem>
        <MenuItem key={"A3"} value={"Asesor"}>
          Asesor
        </MenuItem>
      </Field>
      </div>
      </div>
      
      
      
      <div className='third_div'>
      <Field
        label='Nombre de Usuario'
        variant='standard'
        sx={{ width: "100%" }}
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        as={TextField}
      ></Field>
      
      
      <Field
        label='Contraseña'
        variant='standard'
        sx={{ width: "100%" }}
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        as={TextField}
      ></Field>
      </div>
      
      
    </>
  )
}

export default GeneralData
