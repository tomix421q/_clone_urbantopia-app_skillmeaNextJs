import React from 'react'

export const FilterInput = ({ name, label, handleFilterChange, type = 'text' }) => {
  return (
    <label className='form-control w-full max-w-xs'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <input
        name={name}
        type={type}
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'
        onChange={(event) => handleFilterChange(name, event.target.value)}
      />
    </label>
  )
}

export const FilterSelect = ({ name, label, handleFilterChange, placeholder, options }) => {
  return (
    <label className='form-control w-full max-w-xs'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <select
        className='select select-bordered w-full max-w-xs'
        name={name}
        onChange={(event) => handleFilterChange(name, event.target.value)}
      >
        {placeholder && (
          <option disabled selected>
            {placeholder}
          </option>
        )}

        {options.map((option) => {
          return <option key={option}>{option}</option>
        })}
      </select>
    </label>
  )
}
