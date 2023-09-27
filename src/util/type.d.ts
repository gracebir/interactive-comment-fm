import { Dispatch, SetStateAction } from "react"

export type TextFieldProps = {
    name: string
    value: string
    errorMsg: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder: string
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void
}

export type FormProps = {
    isAdd: boolean
}

export type EditFormProp = {
    value: string
    id: number
    handleOnSubmit: (comment: string, id:number) => void
}

export type commentProps = {
    id: number
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
    idcomment: number
}

export type ReplyTypes = {
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
    replies: Array<ReplyTypes>
    idComment: number
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
            replies: Array<ReplyTypes>
        }
    ]
}

export type NewCommentTypes = {
    id: number
    content: string
    createdAt: string
    score: number
    user: {
        image: {
            png: string
            webp: string
        }
        username: string
    },
    replies: Array<ReplyTypes>
}

export type AppContextType = {
    datas: DataType
    setDatas: Dispatch<SetStateAction<DataType>>
}

export type CommentsType = {
    data: DataType
}

export type DataCommmentTypes = {
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

export type CommentData = {
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
    replies: Array<ReplyTypes>
}

export type comfirmProps = {
    setModalOpen: Dispatch<SetStateAction<boolean>>
    handleClick: () => void
}

export type ReplyFormProps = {
    id: number
    setIsReply: React.Dispatch<SetStateAction<boolean>>
}