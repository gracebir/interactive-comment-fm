import { DataType } from '@/util/type';
import Comments from './_components/Comments'

async function fetchData() {
  const response = await fetch('http://127.0.0.1:3000/api/comment');
  const data:DataType = await response.json()
  return data
}

export default async function Home() {
  const data = await fetchData()
  return (
    <main className="w-full px-6 lg:px-0 bg-light-gray min-h-screen">
      <Comments data={data}/>
    </main>
  )
}
