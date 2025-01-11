import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const posts = await Post.find({}).sort({ date: -1 }).limit(3);
 return  NextResponse.json(posts);
}