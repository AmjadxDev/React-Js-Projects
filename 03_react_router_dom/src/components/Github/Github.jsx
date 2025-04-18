import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [ data, setData ] = useState([]);
    // useEffect(() => {
    //     fetch('https:api.github.com/users/amjadxdev')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(`${data}`)
    //         setData(data);
    //     })
        
    // }, [setData])
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4
    text-3xl'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt='profile image' width='300' /></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https:api.github.com/users/amjadxdev')

    return response.json() 
}