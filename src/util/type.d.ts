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
   idComment?: number
}

export type commentProps = {
    id?: number
    username: string
    avatar: string
    createAt: string
    score: number
    content: string
    replyingTo?: string
    isReply?: boolean
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