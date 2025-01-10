'use server'



import { revalidatePath } from 'next/cache';
import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const posts = await Post.find({}).sort({ date: -1 });
 return  NextResponse.json(posts);
}
