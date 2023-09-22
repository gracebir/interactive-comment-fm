export type TextFieldProps = {
    name: string
    value: string
    errorMsg: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement> ) => void
    placeholder: string
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void
}

export type FormProps = {
   isAdd: boolean
}

export type EditFormProp = {
    value: string
    id: number
}

export type commentProps = {
    id?: number
    username: string
    avatar: string
    createAt: string
    score: number
    content: string
}

export type ReplyProps = {
    id: number
    user: {
        image: {
            png: string,
            webp: string
        },
        username: string
    }
    replyingTo: string
    createdAt: string
    score: number
    content: string
}

export type ReplyResponseProps = {
    replies: Array<ReplyProps>
}

export type DataType = {
    currentUser: {
        image: {
            png: string,
            webp: string
        },
        username: string
    },
    comments: [
        {
            id: number,
            content: string,
            createdAt: string,
            score: number,
            user: {
                image: {
                    png: string,
                    webp: string
                },
                username: string
            },
            replies: Array<ReplyProps>
        }
    ]
}

export type AppContextType = {
    datas: DataType
    setDatas: Dispatch<SetStateAction<DataType>>
}

export type CommentsType = {
    data: DataType
} 