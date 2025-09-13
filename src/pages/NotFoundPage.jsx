import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

const NotFoundPage = () => {
  return (
    <>
    <div className='container flex flex-col min-h-screen justify-center items-center p-4'>
    <div className='text-4xl text-center text-gray-600 font-bold p-2'> Page NotFoundPage</div>
    <ExclamationTriangleIcon className='w-16 h-16 text-red-600 animate-bounce mt-8 '/>
    </div>
    </>
  )
}

export default NotFoundPage