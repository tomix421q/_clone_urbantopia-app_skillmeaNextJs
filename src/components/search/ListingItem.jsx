import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListingItem({ listing }) {
  return (
    <Link href={`/listings/${listing.id}`}>
      <Image src={listing.thumbnail_url} width={300} height={200} alt='apartment' />
      <h3 className='my-2 text-secondary text-center'>{listing.title}</h3>
      <ul className='text-info'>
        <li className='text-lg'>Location: {listing.location}</li>
        <li>Price: ${listing.price}</li>
        <li>Bedrooms: {listing.number_of_bedrooms}</li>
        <li>Bathrooms: {listing.number_of_bathrooms}</li>
        <li>Area: {listing.area} m²</li>
        <li>Year: {listing.year_built}</li>
      </ul>
    </Link>
  )
}
