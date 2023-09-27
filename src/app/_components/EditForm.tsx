'use client'
import { EditFormProp } from '@/util/type'
import React from 'react'
import TextField from './elements/TextField'
import { useFormik } from 'formik'
import Button from './elements/Button'

const EditForm = ({ value, id, handleOnSubmit }: EditFormProp) => {
  const { handleChange, errors, handleBlur, values, handleSubmit } = useFormik({
    initialValues: {
      comment: value ? value : ''
    },
    validateOnBlur: true,
    onSubmit: (value) => {
      handleOnSubmit(value.comment, id)
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
      <Button text={"update"} />
    </form>
  )
}

export default EditForm
