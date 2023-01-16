import React, { useState } from 'react'
import FormInput from './FormInput'

const FormComponent = () => {

  const [ values, setValues ] = useState({
    username: "",
    password: ""
  })

  const inputs = [
    {
      id: "1",
      name: "username",
      label: "Username",
      placeholder: "Your username",
      pattern: "username",
      errorMessage: "Please enter your username"
    },
    {
      id: "2",
      name: "password",
      label: "Password",
      placeholder: "Your password",
      required: true,
      errorMessage: "Please enter your username"
    }
  ]

  // 1 way to get form data
  const handleSubmit = (e) => {
    e.preventDefault();
    
    /* const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries())) */

  }
  // 2 way to get form data
  const handleInput = (e) => {
    setValues(value => ({ ...value, [e.target.name]: e.target.value }))
    console.log(values)
  }

  return (
    <div className='full-center'>
      <form onSubmit={ handleSubmit }>
        <div className="small-form">
          { inputs.map(input => <FormInput key={input.id} {...input} onChange={ handleInput } value={values[input.name]} />) }
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default FormComponent