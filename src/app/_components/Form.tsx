import { FormProps } from '@/util/type'
import React from 'react'
import data from '../../util/data.json'
import TextField from './elements/TextField'
import { useFormik } from 'formik'
import Image from 'next/image'
import Button from './elements/Button'

const Form = ({ isAdd, idComment }: FormProps) => {
    const { handleChange, errors, handleBlur, values, handleSubmit } = useFormik({
        initialValues: {
            comment: ''
        },
        validateOnBlur: true,
        onSubmit: (value) => {
            if(isAdd){
                
            } else {

            }
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
