import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import LatestPosts from '@/components/LatestPosts'
import CategoriesSection from '@/components/CategoriesSection'
import PopularPostsCarousel from '@/components/PopularPostsCarousel'
import Sidebar2 from '@/components/Sidebar2'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import RecommendedPosts from '@/components/RecommendedPosts'
import TrendingTopics from '@/components/TrendingTopics'
import LiveChat from '@/components/LiveChat'

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/featured`,{ cache: 'no-store' })
 const re = await res.json()
 

  return (
    (<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  
      <main className="container mx-auto px-4 py-8">
        <HeroSection data={re[0]}/>
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="lg:w-2/3">
            <LatestPosts datas={re}/>
            <RecommendedPosts />
            <CategoriesSection />
            <PopularPostsCarousel />
          </div>
          <Sidebar2 datas={re}/>
        </div>
      </main>
      <Footer />
      <LiveChat />
    </div>)
  );
}

