import Comment from "./_components/Comment";
import data from '../util/data.json'

export default function Home() {
  return (
    <main className="w-full px-6 lg:px-0 bg-light-gray min-h-screen">
      <div className="max-w-5xl mx-auto py-8 lg:py-20">
        <Comment
          username={data.comments[0].user.username}
          avatar={data.comments[0].user.image.png}
          score={data.comments[0].score}
          content={data.comments[0].content}
          createAt={data.comments[0].createdAt}
        />
      </div>
    </main>
  )
}
