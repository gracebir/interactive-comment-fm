import { ReplyResponseProps } from '@/util/type'
import React from 'react'
import Comment from './Comment'

const Reply = ({ replies }: ReplyResponseProps) => {

  return (
    <div className='flex flex-row gap-4 lg:gap-16 ml-0 lg:ml-16'>
      <div className='border border-gray-300'/>
      <div className=' flex flex-col gap-6'>
        {replies.map((replie) => (
          <Comment
            key={replie.id}
            createAt={replie.createdAt}
            content={replie.content}
            replyingTo={replie.replyingTo}
            isReply={true}
            username={replie.user.username}
            avatar={replie.user.image.png}
            score={replie.score} />
        ))}
      </div>
    </div>
  )
}

export default Reply
