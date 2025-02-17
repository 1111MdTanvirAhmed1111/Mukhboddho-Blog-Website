'use server'

import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find({}).sort({ date: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
