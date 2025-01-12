'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">৫০০</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">সার্ভার ত্রুটি</h2>
        <p className="text-gray-600 mb-4">দুঃখিত, একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। আমরা এটি সমাধান করার চেষ্টা করছি।</p>
        <Link href="/"
         
          className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
           হোমপেজে ফিরে যান
        </Link>
      </div>
    </div>
  )
}

