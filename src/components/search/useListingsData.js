import { createClient } from '@/utils/supabase/component'
import React, { useEffect, useState } from 'react'

const useListingsData = (filters) => {
  const supabase = createClient()
  const [data, setData] = useState([])

  const fetchData = async () => {
    let query = supabase.from('listings').select()

    if (filters.bathrooms) {
      query = query.gte('number_of_bathrooms', filters.bathrooms ?? 0)
    }
    if (filters.bedrooms) {
      query = query.gte('number_of_bedrooms', filters.bedrooms ?? 0)
    }
    if (filters.area) {
      query = query.gte('area', filters.area ?? 0)
    }
    if (filters.year) {
      query = query.gte('year_built', filters.year ?? 0)
    }
    if (filters.min_price) {
      query = query.gte('price', filters.min_price ?? 0)
    }
    if (filters.max_price) {
      query = query.lte('price', filters.max_price ?? Infinity)
    }
    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`)
    }
    if (filters.type) {
      query = query.ilike('property_type', `%${filters.type}%`)
    }
    if (filters.Search) {
      query = query.or(`title.ilike.%${filters.Search}%,description.ilike.%${filters.Search}%,location.ilike.%${filters.Search}%`)
    }

    const { data: listings, error } = await query
    setData(listings)
  }

  useEffect(() => {
    fetchData()
  }, [filters])

  return data
}

export default useListingsData
