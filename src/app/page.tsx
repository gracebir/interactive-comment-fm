'use client'
import Comment from "./_components/Comment";
import data from '../util/data.json'
import Form from "./_components/Form";
import Reply from "./_components/Reply";

export default function Home() {

  return (
    <main className="w-full px-6 lg:px-0 bg-light-gray min-h-screen">
      <div className="max-w-5xl mx-auto py-8 lg:py-20 flex flex-col gap-6">
        {data.comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-6">
            <Comment
              username={comment.user.username}
              avatar={comment.user.image.png}
              score={comment.score}
              content={comment.content}
              createAt={comment.createdAt}
            />
            {comment.replies.length ? <Reply replies={comment.replies}  />: null}
          </div>
        ))}
        <div className=" mt-6">
          <Form isAdd={false} />
        </div>
      </div>
    </main>
  )
}
