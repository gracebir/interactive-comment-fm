'use client'
import React, { useContext, useEffect } from 'react'
import Comment from './Comment'
import Replies from './Replies'
import Form from './Form'
import { AppContext} from '../_context/DataProvider'
import { CommentsType } from '@/util/type'

const Comments = ({data}: CommentsType) => {
    const {datas, setDatas} = useContext(AppContext)
    useEffect(()=>{
      setDatas(data)
    },[])
  return (
     <div className="max-w-5xl mx-auto py-8 lg:py-20 flex flex-col gap-6">
        {datas?.comments?.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-6">
            <Comment
              username={comment.user.username}
              avatar={comment.user.image.png}
              score={comment.score}
              content={comment.content}
              createAt={comment.createdAt}
            />
            {comment.replies.length ? <Replies replies={comment.replies}  />: null}
          </div>
        ))}
        <div className=" mt-6">
          <Form isAdd={false} />
        </div>
      </div>
  )
}

export default Comments