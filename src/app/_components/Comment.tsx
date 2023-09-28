'use client'
import { DataType, commentProps } from '@/util/type'
import Image from 'next/image'
import { PiPencilSimpleFill } from "react-icons/pi"
import React, { useContext, useState } from 'react'
import { FaReply, FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { AppContext } from '../_context/DataProvider'
import UpdateButton from './elements/UpdateButton'
import ConfirmModal from './ConfirmModal'
import EditForm from './EditForm'
import { deleteComment, updateComment } from '@/util/utils'
import ReplyForm from './ReplyForm'

const Comment = ({ username, avatar, createAt, score, content, id }: commentProps) => {
  const [scoreValue, setScoreValue] = useState(score)
  const [openModal, setOpenModal] = useState(false)
  const [isReply, setIsReply] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)
  const { datas, setDatas } = useContext(AppContext)

  const onDelete = () => {
    const newComment = deleteComment(datas.comments, id!)
    setDatas({
      currentUser: datas.currentUser,
      comments: newComment
    } as DataType)
  }

  const onUpdate = (content: string, id: number) => {
    const newsComment = updateComment(datas.comments, content, id)
    setDatas({
      currentUser: datas.currentUser,
      comments: newsComment
    } as DataType)
    setIsEditForm(false)
  }

  return (
    <div className='flex flex-col gap-4 lg:gap-6 duration-300'>
      <div className='bg-off-white p-7 lg:p-12 rounded-md grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-6'>
        <div className='flex flex-col order-1 lg:order-2 gap-4 lg:col-span-8 col-span-1'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center text-base lg:text-xl gap-3'>
              <Image src={avatar} alt={username} width={40} height={40} />
              <span className='font-bold'>{username}</span>
              <span>{createAt}</span>
            </div>
            {datas.currentUser.username === username ? (
              <div className='hidden lg:flex gap-6 items-center'>
                <UpdateButton className="text-red hover:text-palered" text='Detele' Icon={FaTrash} onClick={() => setOpenModal(true)} />
                <UpdateButton className='text-blue hover:text-grayish' text='Edit' Icon={PiPencilSimpleFill} onClick={() => setIsEditForm(!isEditForm)} />
              </div>
            ) : (
              <button onClick={() => setIsReply(!isReply)} className='hidden lg:flex items-center gap-2 text-blue font-medium text-base lg:text-lg'>
                <FaReply size={15} />
                Reply
              </button>
            )}
          </div>
          {isEditForm ? (
            <EditForm value={content} id={id!} handleOnSubmit={onUpdate} />
          ) : (
            <p className="text-grayish-blue text-base lg:text-[1.4rem] leading-7 lg:leading-8">{content}</p>
          )}
        </div>
        <div className='flex justify-between items-start col-span-1 order-2 lg:order-1'>
          <div
            className='flex flex-row items-center px-6 lg:px-5 space-x-4 rounded-md space-y-0 lg:flex-col lg:space-x-0 lg:space-y-4 p-4 bg-very-light-very'>
            <button onClick={() => setScoreValue(scoreValue + 1)} className='text-grayish hover:text-blue'><FaPlus /></button>
            <span className='text-lg lg:text-xl font-medium text-blue'>{scoreValue}</span>
            <button onClick={() => {
              if (scoreValue > 0) {
                setScoreValue(scoreValue - 1)
              }
            }} className='text-grayish text-xl hover:text-blue'><FaMinus /></button>
          </div>
          {datas.currentUser.username === username ? (
            <div className='flex lg:hidden gap-4 items-center'>
              <UpdateButton className="text-red hover:text-palered" text='Detele' Icon={FaTrash} onClick={() => setOpenModal(true)} />
              <UpdateButton className='text-blue hover:text-grayish' text='Edit' Icon={PiPencilSimpleFill} onClick={() => setIsEditForm(!isEditForm)} />
            </div>
          ) : (
            <button onClick={() => setIsReply(!isReply)} className='flex lg:hidden items-center gap-2 text-blue font-medium text-base lg:text-lg'>
              <FaReply size={15} />
              Reply
            </button>
          )}
        </div>
        {openModal && <ConfirmModal setModalOpen={setOpenModal} handleClick={onDelete} />}
      </div>
      {isReply && <ReplyForm setIsReply={setIsReply} id={id} />}
    </div>
  )
}

export default Comment
