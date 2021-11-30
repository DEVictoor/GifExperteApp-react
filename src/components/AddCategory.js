import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2){
      setCategories(oldCat => [inputValue, ...oldCat]);
      setInputValue('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category </h2>  
      <input
        type="text"
        value= {inputValue}
        onChange={ handleChange}
        placeholder="Ingrese un texto"
      /> 
    </form>
  )
}


AddCategory.propTypes = {

  setCategories : PropTypes.func.isRequired

}