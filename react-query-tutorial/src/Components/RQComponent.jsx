import React from 'react'
import { useQuery } from 'react-query'

const fetchDev = () => fetch('http://localhost:3001/developers').then((res) => res.json(),)

const onError = (error) => console.log(error)
const onSuccess = (data) => console.log('Successfully fetched')

const RQComponent = () => {
  const { isLoading, error, data } = useQuery(['developers'], fetchDev, { 
    onError,
    onSuccess
   })

  if(isLoading) return 'wait...'

  if(error) throw new Error(`🪳 ${error}`)
    
  return (
    <div>
        { JSON.stringify(data) }
    </div>
  )
}

export default RQComponent