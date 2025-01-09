"use server"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CommentsCard from './commentCard';
import { createComment, getComments } from '@/lib/comment-actions';

async function CommentArea({id}) {

const comnt = await getComments(id)


  return (
    <div>
    <form  className="mb-8" action={createComment.bind(null,id)}>
      
    <Textarea
      placeholder="Write a comment..."
        name="content"
      className="my-6 "
    />
    <Button type="submit">Post Comment</Button>
  </form>

{
    comnt.map((comment) => {
      return <CommentsCard  
            key={comment._id}
          _id= {comment._id}
          author={comment.author}
          date= {comment.date}
          content={comment.content}/>
      
    })
}

  </div>
  )
}

export default CommentArea