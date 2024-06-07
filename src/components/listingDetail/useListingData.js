import { createClient } from '@/utils/supabase/component'
import { useEffect, useState } from 'react'

const useListingsData = (listingId) => {
  const supabase = createClient()
  const [data, setData] = useState(null)

  const fetchData = async () => {
    if (!listingId) return
    let { data } = await supabase.from('listings').select().eq('id', listingId)

    console.log('data', data)
    setData(data?.[0] ?? null)
  }

  useEffect(() => {
    fetchData()
  }, [listingId])

  return data
}

export default useListingsData
