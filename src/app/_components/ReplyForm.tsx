import React, { useContext } from 'react'
import TextField from './elements/TextField'
import Image from 'next/image'
import Button from './elements/Button'
import { AppContext } from '../_context/DataProvider'
import { useFormik } from 'formik'
import { ReplyFormProps, ReplyProps } from '@/util/type'

const ReplyForm = ({ setIsReply, id }: ReplyFormProps) => {
    const { datas, setDatas } = useContext(AppContext)
    const { handleChange, errors, handleBlur, resetForm, values, handleSubmit } = useFormik({
        initialValues: {
            comment: ''
        },
        validateOnBlur: true,
        onSubmit: (value) => {
            const index = datas.comments.findIndex(item => item.id === id)
            const idReply = (Math.floor(Math.random() * (1000 - 20 + 1)) + 20)
            const newReply: ReplyProps = {
                id: idReply,
                content: value.comment,
                createdAt: "now",
                replyingTo: datas.comments[index].user.username,
                score: 0,
                user: datas.currentUser,
            }
            
            if (datas.comments[index].replies) {
                datas.comments[index].replies = [
                    ...datas.comments[index].replies,
                    newReply
                ]
                setDatas({
                   currentUser: datas.currentUser,
                   comments: datas.comments  
                })
            } else {
                datas.comments[index].replies = [
                    newReply
                ]
                setDatas({
                   currentUser: datas.currentUser,
                   comments: datas.comments  
                })
            }
            console.log(newReply, id)
            resetForm()
            setIsReply(false)
        }
    })
    return (
        <form onSubmit={handleSubmit} className=' flex flex-col gap-4 lg:flex-row p-7 lg:p-12 bg-off-white rounded-lg'>
            <div className='hidden lg:block'>
                <Image src={datas.currentUser.image.png} width={40} height={40} alt='avatar' />
            </div>
            <div className='flex-1'>
                <TextField
                    errorMsg={errors.comment!}
                    onBlur={handleBlur}
                    placeholder={"Reply to comment"}
                    onChange={handleChange}
                    name="comment"
                    value={values.comment} />
            </div>
            <div className='flex justify-between items-center lg:items-start'>
                <Image className='block lg:hidden' src={datas.currentUser.image.png} width={40} height={40} alt='avatar' />
                <Button text={"reply"} />
            </div>
        </form>
    )
}

export default ReplyForm
