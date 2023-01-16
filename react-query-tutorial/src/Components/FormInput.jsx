import React, { useState } from 'react'

const FormInput = (props) => {
  const [ focused, setFocused ] = useState(false)

  const handleFocused = () => { 
    setFocused(true)
  }

  return (
    <div className="input">
      <label htmlFor={ props.name }>{ props.label }</label>
      <input type="text" id={props.name} name={props.name} placeholder={props.placeholder} required={ props.required } pattern={props.pattern} onBlur={ handleFocused } focused={ focused.toString() } onChange={props.onChange} value={props.value} />
      <span> { props.errorMessage } </span>
    </div>
  )
}

export default FormInput