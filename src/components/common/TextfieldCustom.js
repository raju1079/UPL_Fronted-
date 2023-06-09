import { TextField } from '@mui/material'
import React from 'react'

const TextfieldCustom = (props) => {
  return (
    <TextField
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    InputProps={props.InputProps}
    required={props.required}
    />
  )
}

export default TextfieldCustom
