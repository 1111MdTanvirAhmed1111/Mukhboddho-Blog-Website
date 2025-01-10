
import Link from 'next/link'

import { blogPosts } from '@/data/blog-posts'

import HeaderSlider from '@/components/HeaderSlider'
import CatagoriesSection from './../components/catagories/CatagoriesSection';

import Login from './../components/login-btn';
import { Button } from '@/components/ui/button';

export default async function page() {


  return (
    <div>


      {/* <Login /> */}
      {/* <HeaderSlider />
      <CatagoriesSection /> */}
     
           {/* Hero Section */}
           <section className="py-20 text-center space-y-6">
  <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
    <span className="text-emerald-600 dark:text-emerald-500">মুসাফির-আগন্তুক</span>
  </h1>
  <div className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    {/* Replace <p> tag with <div> or other suitable elements */}
    <div className="flex justify-center">
      <Button variant="outline" size="lg" asChild>
        <Link href="/about">আমার সম্পর্কে</Link>
      </Button>
    </div>
  </div>
</section>

       {/* Social Media Section */}
       <section className="py-16 px-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Follow me in Social Media
        </h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

