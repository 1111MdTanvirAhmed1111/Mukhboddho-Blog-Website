import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">৪০৪</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">পৃষ্ঠা পাওয়া যায়নি</h2>
        <p className="text-gray-600 mb-4">দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।</p>
        <Link href="/" className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          হোমপেজে ফিরে যান
        </Link>
      </div>
    </div>
  )
}

