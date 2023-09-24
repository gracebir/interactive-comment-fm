'use client'
import { DataType, FormProps, NewCommentTypes, commentProps } from '@/util/type'
import React, { useContext } from 'react'
import data from '../../util/data.json'
import TextField from './elements/TextField'
import { useFormik } from 'formik'
import Image from 'next/image'
import Button from './elements/Button'
import { AppContext } from '../_context/DataProvider'

const Form = ({ isAdd }: FormProps) => {
    const {datas, setDatas} = useContext(AppContext)
    const { handleChange, errors, handleBlur,resetForm, values, handleSubmit } = useFormik({
        initialValues: {
            comment: ''
        },
        validateOnBlur: true,
        onSubmit: (value) => {
           let newComment:NewCommentTypes = {
            id: (Math.floor(Math.random() * (1000 - 5 + 1)) + 6),
            content: value.comment,
            createdAt: "today",
            score: 0,
            user: {
                image: datas.currentUser.image,
                username: datas.currentUser.username
            },
            replies: []
           }
           setDatas({
            currentUser: data.currentUser,
            comments: [
                ...datas.comments,
                newComment
            ] as Array<NewCommentTypes>
           } as DataType)
           resetForm()
        }
        
    })
    return (
        <form onSubmit={handleSubmit} className=' flex flex-col gap-4 lg:flex-row p-7 lg:p-12 bg-off-white rounded-lg'>
            <div className='hidden lg:block'>
                <Image src={data.currentUser.image.png} width={40} height={40} alt='avatar'/>
            </div>
            <div className='flex-1'>
                <TextField
                    errorMsg={errors.comment!}
                    onBlur={handleBlur}
                    placeholder={isAdd ? "Add comment" : "Reply to comment"}
                    onChange={handleChange}
                    name="comment"
                    value={values.comment} />
            </div>
            <div className='flex justify-between items-center lg:items-start'>
                <Image className='block lg:hidden' src={data.currentUser.image.png} width={40} height={40} alt='avatar'/>
                <Button text={isAdd ? "send":"reply"}/>
            </div>
        </form>
    )
}

export default Form
