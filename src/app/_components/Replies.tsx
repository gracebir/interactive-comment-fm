import { ReplyResponseProps } from '@/util/type'
import React from 'react'
import Reply from './Reply'

const Replies = ({ replies }: ReplyResponseProps) => {
  return (
    <div className='flex flex-row gap-4 lg:gap-16 ml-0 lg:ml-16'>
      <div className='border border-gray-300'/>
      <div className=' flex flex-col gap-6'>
        {replies.map((replie) => (
          <Reply
            key={replie.id}
            id={replie.id}
            user={replie.user}
            createdAt={replie.createdAt}
            content={replie.content}
            replyingTo={replie.replyingTo}
            score={replie.score} />
        ))}
      </div>
    </div>
  )
}

export default Replies