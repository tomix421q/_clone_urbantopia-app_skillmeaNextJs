
import ListingItem from '@/components/search/ListingItem'
import SearchFilters from '@/components/search/SearchFilters'
import useListingsData from '@/components/search/useListingsData'
import React, { useState } from 'react'

// ___________________________________________________________
const SearchPage = () => {
  const [filters, setFilters] = useState({})
  const listings = useListingsData(filters)

  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <SearchFilters setFilters={setFilters} />
        <div className='grid grid-cols-3 gap-4'>
          {listings.map((listing, index) => {
            return <ListingItem key={listing.id + index} listing={listing} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
