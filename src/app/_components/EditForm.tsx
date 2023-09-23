'use client'
import { DataType, EditFormProp } from '@/util/type'
import React, { useContext } from 'react'
import TextField from './elements/TextField'
import { useFormik } from 'formik'
import Button from './elements/Button'
import { updateReply } from '@/util/utils'
import { AppContext } from '../_context/DataProvider'


const EditForm = ({value, id, setIsOpen}: EditFormProp) => {
    const {setDatas, datas} = useContext(AppContext)
    const { handleChange, errors, handleBlur, values, handleSubmit } = useFormik({
        initialValues: {
            comment: value ? value : ''
        },
        validateOnBlur: true,
        onSubmit: (value) => {
           const newsComment = updateReply(datas.comments, value.comment, id)
           console.log(newsComment)
           setDatas({
            currentUser: datas.currentUser,
            comments: newsComment
           } as DataType)
           setIsOpen(false)
        }
    })
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-end gap-4 bg-off-white rounded-lg'>
            <div className='flex-1 w-full'>
                <TextField
                    errorMsg={errors.comment!}
                    onBlur={handleBlur}
                    placeholder={"Edit reply "}
                    onChange={handleChange}
                    name="comment"
                    value={values.comment} />
            </div>
            <Button text={"update"}/>
        </form>
  )
}

export default EditForm
