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
      if(data){
        setDatas(data)
      }
    },[])
    
  return (
     <div className="max-w-5xl mx-auto py-8 lg:py-20 flex flex-col gap-6">
      {datas.comments ? (
        datas.comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-6">
            <Comment
              id={comment.id}
              username={comment.user.username}
              avatar={comment.user.image.png}
              score={comment.score}
              content={comment.content}
              createAt={comment.createdAt}
            />
            {comment.replies.length ? <Replies replies={comment.replies}  />: null}
          </div>
        ))
      ): (
        <div className='h-[50vh] w-full flex items-center'>
          <p className='text-center mx-auto text-lg lg:text-lg font-medium'>Loading...</p>
        </div>
      )}
        
        <div className=" mt-6">
          <Form isAdd={true} />
        </div>
      </div>
  )
}

export default Comments
