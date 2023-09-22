import React from 'react'
import { IconType } from 'react-icons'

const UpdateButton = ({onClick,className, text, Icon}:{text: string, className: string, Icon: IconType, onClick: ()=> void}) => {
    return (
        <button className={`${className} flex flex-row gap-3 items-center`} onClick={onClick}>
            <Icon  size={20} />
            <span className='font-medium text-xl lg:text-2xl'>{text}</span>
        </button>
    )
}

export default UpdateButton
