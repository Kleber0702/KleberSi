import React from 'react'
import {
  MenuItem,
  TextField,
} from '@mui/material';
import { Field, FormikProps, FormikValues } from 'formik';
import { MyFormValues } from '../Update';
import { useState } from 'react';

interface props {
  formik: FormikProps<MyFormValues>
}

const Direction = ({formik}: props) => {
  return (
    
    <div className='container1'>
      <Field
        label='Calle'
        variant='standard'
        sx={{ width: '20%' }}
        name='street'
        value={formik.values.street}
        onChange={formik.handleChange}
        error={formik.touched.street && Boolean(formik.errors.street)}
        helperText={formik.touched.street && formik.errors.street}
        as={TextField}
      ></Field>
      <Field
        label='Codigo Postal'
        variant='standard'
        sx={{ width: '20%' }}
        name='street'
        value={formik.values.}
        onChange={formik.handleChange}
        error={formik.touched.street && Boolean(formik.errors.street)}
        helperText={formik.touched.street && formik.errors.street}
        as={TextField}
      ></Field>
      <Field
        label='Avenida'
        variant='standard'
        sx={{ width: '20%' }}
        name='avenue'
        value={formik.values.avenue}
        onChange={formik.handleChange}
        error={formik.touched.avenue && Boolean(formik.errors.avenue)}
        helperText={formik.touched.avenue && formik.errors.avenue}
        as={TextField}
      ></Field>
      
      <Field
        number
        label='Número Interno'
        variant='standard'
        sx={{ width: '20%' }}
        name='internal_number'
        value={formik.values.internal_number}
        onChange={formik.handleChange}
        error={formik.touched.internal_number && Boolean(formik.errors.internal_number)}
        helperText={formik.touched.internal_number && formik.errors.internal_number}
        as={TextField}
      ></Field>
      <Field
        number
        label='Número externo'
        variant='standard'
        sx={{ width: '20%' }}
        name='external_number'
        value={formik.values.external_number}
        onChange={formik.handleChange}
        error={formik.touched.external_number && Boolean(formik.errors.external_number)}
        helperText={formik.touched.external_number && formik.errors.external_number}
        as={TextField}
      ></Field>
      <Field
        label='Colonia'
        variant='standard'
        sx={{ width: '20%' }}
        name='colonia'
        value={formik.values.colony}
        onChange={formik.handleChange}
        error={formik.touched.colony && Boolean(formik.errors.colony)}
        helperText={formik.touched.colony && formik.errors.colony}
        as={TextField}
      ></Field>
      <Field
        select
        label='Estado'
        variant='standard'
        sx={{ width: '20%' }}
        name='state'
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
        as={TextField}
      >
        <MenuItem key={"A1"} value={"Chiapas"}>
          Chiapas
        </MenuItem>
        <MenuItem key={"A2"} value={"Distrito Federal"}>
          Distrito Federal
        </MenuItem>
        <MenuItem key={"A3"} value={"Michoacán"}>
          Michoacán
        </MenuItem>
        <MenuItem key={"A3"} value={"Quintana Roo"}>
          Quintana Roo
        </MenuItem>
      </Field>
    </div>
  )
}

export default Direction
