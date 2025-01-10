'use client'
import Link from 'next/link'

import { blogPosts } from '@/data/blog-posts'

import HeaderSlider from '@/components/HeaderSlider'
import CatagoriesSection from './../components/catagories/CatagoriesSection';

import Login from './../components/login-btn';
import { CldUploadWidget } from 'next-cloudinary';


export default async function page() {


  return (
    <div>
      <CldUploadWidget uploadPreset={process.env.upload_preset} cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}>
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>

      {/* <Login /> */}
      {/* <HeaderSlider />
      <CatagoriesSection /> */}
      <main class="container mx-auto px-4 py-8"><section class="py-20 text-center"><h1 class="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">মুসাফির-আগন্তুক এ আপনাকে<span class="text-emerald-600 dark:text-emerald-500"> স্বাগতম</span></h1></section></main>
    </div>
  )
}

