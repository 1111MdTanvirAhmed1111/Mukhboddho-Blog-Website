import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Loader2 className="animate-spin text-purple-600 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">লোড হচ্ছে...</h1>
        <p className="text-gray-600">অনুগ্রহ করে অপেক্ষা করুন, আমরা আপনার অনুরোধ প্রক্রিয়া করছি।</p>
      </div>
    </div>
  )
}

