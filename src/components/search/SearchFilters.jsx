import React from 'react'
import { FilterSelect, FilterInput } from '@/components/search/FilterComponents'
import { useFilterValues } from './useFilterValues'
import { RotateCcw } from 'lucide-react'

export default function SearchFilters({ setFilters }) {
  const { types, locations } = useFilterValues()

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }
  return (
    <div className='mb-10 bg-gray-800 p-12 rounded-lg'>
      <div className='flex gap-2 w-full justify-center mb-7'>
        <input
          type='text'
          placeholder='Type here'
          onChange={(event) => handleFilterChange('Search', event.target.value)}
          className='input max-w-4xl input-bordered input-primary w-full'
        />
        <button className='btn btn-primary'>Search</button>
      </div>
      <div className='grid grid-cols-3'>
        <FilterSelect
          label='Location'
          name={'location'}
          handleFilterChange={handleFilterChange}
          options={locations}
          placeholder={'Select Location'}
        />
        <FilterSelect
          label='Property Type'
          name={'type'}
          handleFilterChange={handleFilterChange}
          options={types}
          placeholder={'Select Type'}
        />
        <FilterInput type='number' label='Year' name={'year'} handleFilterChange={handleFilterChange} />
        <FilterInput type='number' label='Area' name={'area'} handleFilterChange={handleFilterChange} />
        <FilterInput type='number' label='Bathrooms' name={'bathrooms'} handleFilterChange={handleFilterChange} />
        <FilterInput type='number' label='Bedrooms' name={'bedrooms'} handleFilterChange={handleFilterChange} />
        <FilterInput type='number' label='Max Price' name={'max_price'} handleFilterChange={handleFilterChange} />
        <FilterInput type='number' label='Min Price' name={'min_price'} handleFilterChange={handleFilterChange} />
        <button
          className='btn btn-neutral w-fit text-sm md:text-xl flex place-self-end'
          onClick={() =>
            setFilters({
              search: '',
              location: '',
              type: '',
              year: '',
              area: '',
              bathrooms: '',
              bedrooms: '',
              max_price: '',
              min_price: '',
            })
          }
          type='button'
        >
          <RotateCcw />
          Reset
        </button>
      </div>
    </div>
  )
}
