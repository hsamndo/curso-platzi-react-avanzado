import { useEffect, useState } from 'react'

export function useCategoriesData () {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      window.fetch('https://petgram-server-hsamndo.vercel.app/categories')
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }, [])
  
    return { categories, loading }
  }