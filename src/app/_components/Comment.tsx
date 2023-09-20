'use client'
import { commentProps } from '@/util/type'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaReply, FaMinus, FaPlus } from "react-icons/fa"

const Comment = ({ username, avatar, createAt, score, content }: commentProps) => {
  const [scoreValue, setScoreValue] = useState(score)
  return (
    <div className='bg-off-white p-7 lg:p-12 rounded-md grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-6'>
      <div className='flex flex-col order-1 lg:order-2 gap-4 lg:col-span-8 col-span-1'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center text-base lg:text-xl gap-3'>
            <Image src={avatar} alt={username} width={40} height={40} />
            <span className='font-bold'>{username}</span>
            <span>{createAt}</span>
          </div>
          <button className='hidden lg:flex items-center gap-2 text-blue font-medium text-base lg:text-lg'>
            <FaReply size={15} />
            Reply
          </button>
        </div>
        <p className="text-grayish-blue text-base lg:text-[1.4rem] leading-7 lg:leading-8">{content}</p>
      </div>
      <div className='flex justify-between col-span-1 order-2 lg:order-1'>
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
        <button className='flex lg:hidden items-center gap-2 text-blue font-medium text-base lg:text-lg'>
          <FaReply size={15} />
          Reply
        </button>
      </div>
    </div>
  )
}

export default Comment
