import ContactForm from '@/components/listingDetail/ContactForm'
import useListingsData from '@/components/listingDetail/useListingData'
import { createClient } from '@/utils/static-props'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function DetailPage({ listing }) {
  // CRS VERSION
  // const router = useRouter()
  // const { listingId } = router.query
  // const listing = useListingsData(listingId)

  if (!listing) {
    return (
      <div className='flex flex-col uppercase text-5xl items-center justify-center h-screen'>
        <div className=' w-1/3 h-1/4 mx-auto loading loading-infinity text-info' />
        <h2 className=' text-center animate-pulse text-secondary tracking-widest font-thin'>loading</h2>
        <span className='animate-bounce tracking-[30px] text-info font-extrabold mx-auto text-center'>...</span>
      </div>
    )
  }

  return (
    <div className='space-y-10 '>
      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-4'>
          <h1 className='text-4xl'>{listing.title}</h1>
          <p>{listing.description}</p>
          <ul className='list-disc'>
            <li className='text-lg'>Location: {listing.location}</li>
            <li>Price: ${listing.price}</li>
            <li>Bedrooms: {listing.number_of_bedrooms}</li>
            <li>Bathrooms: {listing.number_of_bathrooms}</li>
            <li>Area: {listing.area} m²</li>
            <li>Year: {listing.year_built}</li>
          </ul>
        </div>

        <Image src='/images/apartment.webp' alt={listing.description} width={300} height={300} className='justify-self-end' />
      </div>

      {/* photos  */}
      <div className='grid grid-cols-3 gap-4'>
        {listing.gallery_urls.map((imageUrl, index) => {
          return <Image key={imageUrl + index} src={imageUrl} alt={listing.description} width={300} height={300} sizes='33vw'/>
        })}
      </div>
      <ContactForm listingId={listing.id} />
    </div>
  )
}

export async function getStaticProps(context) {
  const supabase = createClient()
  const listingId = context.params.listingId
  const { data: listings, error } = await supabase.from('listings').select().eq('id', listingId)

  const listing = listings?.[0]
  if (!listing || error) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      listing: listings?.[0],
    },
    revalidate: 60 * 60 * 24,
  }
}

export async function getStaticPaths() {
  const supabase = createClient()
  const { data: listings, error } = await supabase.from('listings').select('id')

  const paths = listings.map((listing) => ({
    params: { listingId: listing.id.toString() },
  }))
  return {
    paths: paths,
    fallback: true,
  }
}
