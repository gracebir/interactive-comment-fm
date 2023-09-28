import { DataType } from '@/util/type';
import data from '@/util/data.json'
import Comments from './_components/Comments'

export default async function Home() {
  return (
    <main className="w-full px-6 lg:px-0 bg-light-gray min-h-screen">
      <Comments data={data as DataType}/>
    </main>
  )
}