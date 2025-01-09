'use server'
import { BlogCard } from '@/components/blog-card'
import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import Link from 'next/link'
export const preventSSG = true;
async function page() {
    await dbConnect()
    const data = await Post.find({})


    const arr = JSON.parse(JSON.stringify(data))
    

  return (
    <main className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {arr.map((post,i) => (
        <Link href={`/blog/${post._id}`} key={post._id} className="transform transition duration-300 hover:scale-105">
          <BlogCard
          key={i}
            title={post.title}
            author={post.author}
            excerpt={post.content.slice(0, 100)}
            date={post.date}
            imageUrl={post.imageUrl}
            category={post.category}
          />
        </Link>
      ))}
    </div>
  </main>
  )
}

export default page