import { createClient } from '@/utils/supabase/component'
import React, { useEffect, useState } from 'react'

export function useFilterValues(filters) {
  const supabase = createClient()
  const [data, setData] = useState({ types: [], locations: [] })

  const fetchData = async () => {
    const { data, error } = await supabase.from('listings').select('location,property_type')

    const locations = data.map((listing) => listing.location)
    const types = data.map((listing) => listing.property_type)

    setData({ types, locations })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data
}
