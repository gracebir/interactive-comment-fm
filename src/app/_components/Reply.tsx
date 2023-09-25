'use client'
import { DataType, ReplyProps } from '@/util/type'
import { deleteReply, lowerFirstChar } from '@/util/utils'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { FaReply, FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { PiPencilSimpleFill } from "react-icons/pi"
import UpdateButton from './elements/UpdateButton'
import EditForm from './EditForm'
import { AppContext } from '../_context/DataProvider'
import ConfirmModal from './ConfirmModal'

const Reply = ({ score, user, content, createdAt, replyingTo, id }: ReplyProps) => {
  const { datas, setDatas } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false)
  const currentUser = datas.currentUser.username
  const [isEdit, setIsEdit] = useState(false)
  const [scoreValue, setScoreValue] = useState(score)
  const onDelete = () => {
    const newComment = deleteReply(datas.comments, id)
    setDatas({
      currentUser: datas.currentUser,
      comments: newComment
    } as DataType)
  }

  return (
    <div className='bg-off-white p-7 lg:p-12 rounded-md grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-6'>
      <div className='flex flex-col order-1 lg:order-2 gap-4 lg:col-span-8 col-span-1'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center text-base lg:text-xl gap-3'>
            <Image src={user.image.png} alt={user.username} width={40} height={40} />
            <span className='font-bold'>{user.username}</span>
            <span>{createdAt}</span>
          </div>
          {currentUser === user.username ? (
            <div className='hidden lg:flex gap-6 items-center'>
              <UpdateButton className="text-red hover:text-palered" text='Detele' Icon={FaTrash} onClick={() => setOpenModal(true)} />
              <UpdateButton className='text-blue hover:text-grayish' text='Edit' Icon={PiPencilSimpleFill} onClick={() => setIsEdit(!isEdit)} />
            </div>
          ) : (
            <button className='hidden lg:flex items-center gap-2 text-blue font-medium text-base lg:text-lg'>
              <FaReply size={15} />
              Reply
            </button>
          )}
        </div>
        {isEdit ? (
          <EditForm setIsOpen={setIsEdit} id={id} value={`@${replyingTo} ${lowerFirstChar(content)}`} />
        ) : (
          <p className="text-grayish-blue text-base lg:text-[1.4rem] leading-7 lg:leading-8">
            <span className='text-blue font-medium'>@{replyingTo}</span>&nbsp;{lowerFirstChar(content)}
          </p>
        )
        }
      </div >
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
        {currentUser === user.username ? (
          <div className='flex lg:hidden gap-4 items-center'>
            <UpdateButton className="text-red hover:text-palered" text='Detele' Icon={FaTrash} onClick={() => setOpenModal(true)} />
            <UpdateButton className='text-blue hover:text-grayish' text='Edit' Icon={PiPencilSimpleFill} onClick={() => { }} />
          </div>
        ) : (
          <button className='flex lg:hidden items-center gap-2 text-blue font-medium text-base lg:text-lg'>
            <FaReply size={15} />
            Reply
          </button>
        )}

      </div>
      {openModal && (<ConfirmModal handleClick={onDelete} setModalOpen={setOpenModal} />)}
    </div >
  )
}

export default Reply
