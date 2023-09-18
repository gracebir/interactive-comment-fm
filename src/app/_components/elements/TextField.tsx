'use client'
import { TextFieldProps } from '@/util/type'
import React from 'react'

const TextField = ({ name, value, placeholder,errorMsg,onBlur, onChange }: TextFieldProps) => {
  return (
    <textarea
    className={`block px-4 lg:px-6 py-2 lg:text-lg resize-none lg:py-4 outline-none w-full text-sm rounded-lg 
    border ${errorMsg ? "border-red focus:border-red":"border-light-gray focus:border-grayish-blue"}`}
     onChange={onChange} 
     name={name} 
     id={name}
     onBlur={onBlur}
     value={value}
     placeholder={placeholder}
     cols={40}
     rows={4}
    ></textarea>
  )
}

export default TextField
