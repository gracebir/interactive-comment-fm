'use client'
import { DataType, comfirmProps } from '@/util/type'
import React, { useContext } from 'react'
import { AppContext } from '../_context/DataProvider'
import { deleteReply } from '@/util/utils'

const ConfirmModal = ({id, setModalOpen}:comfirmProps) => {
    const {datas, setDatas} = useContext(AppContext)
    const onDelete = () => {
        const newComment = deleteReply(datas.comments, id)
        setDatas({
          currentUser: datas.currentUser,
          comments: newComment
        } as DataType)
      }
  return (
    <div className="fixed right-0 inset-0 flex items-center left-0 w-full bg-opacity-50 px-6 lg:px-0 z-30 bg-black h-screen">
      <div className="bg-off-white mx-auto rounded-md max-w-md px-6 lg:px-8 py-6 flex-1 flex flex-col gap-4 lg:gap-5">
        <h2 className="text-xl lg:text-2xl font-medium">Delete comment</h2>
        <p className="text-lg lg:text-xl text-grayish-blue">Are you sure want to delete this
            comment? This will remove the comment
            and cant't be undone.
        </p>
        <div className='grid grid-cols-2 gap-2 lg:gap-4 text-white'>
            <button onClick={()=> setModalOpen(false)} className="uppercase rounded-md w-full py-2 lg:py-3 bg-grayish-blue font-medium">no,cancel</button>
            <button onClick={onDelete} className="uppercase rounded-md w-full py-2 lg:py-3 bg-red font-medium">delete</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
