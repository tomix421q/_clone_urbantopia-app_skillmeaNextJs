import { createClient } from '@/utils/supabase/component'
import React from 'react'

//name,email,phone,listingId
const ContactForm = ({ listingId }) => {
  const supabase = createClient()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!listingId) {
      return
    }
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    const { error } = await supabase.from('inquiries').insert({ ...data, listing_id: listingId })
  }
  return (
    <form className='w-full max-w-xs h-screen' onSubmit={handleSubmit}>
      <h2 className='text-2xl mb-4'>Send Inquiry</h2>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Name</span>
        </label>
        <input type='text' name='name' className='input input-bordered' />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Email</span>
        </label>
        <input type='email' name='email' className='input input-bordered' />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Phone</span>
        </label>
        <input type='number' name='phone' className='input input-bordered' />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Listing ID</span>
        </label>
        <input value={listingId} disabled readOnly type='text' name='listing_id' className='input input-bordered' />
      </div>
      <button className='btn btn-primary mt-5 w-full' type='submit'>
        Send
      </button>
    </form>
  )
}

export default ContactForm
