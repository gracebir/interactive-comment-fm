import { CommentData } from "./type"

export function lowerFirstChar(str: string) {
    const split = str.split('')
    split[0] = split[0].toLowerCase()
    return split.join('')
}

function remoteFirstWork(str: string) {
    let splitWords = str.split(" ")
    splitWords.shift()
    return splitWords.join(" ")
}

export function updateReply(arr: Array<CommentData>, content: string, id: number) {
    const array = arr.map((comment) => {
        if (comment.replies.length > 0) {
            let index = comment.replies.findIndex(reply => reply.id === id)
            comment.replies[index].content = remoteFirstWork(content)
        }
        return comment
    })
    return array
}

export function deleteReply(arr: Array<CommentData>, id: number) {
    const array = arr.map((comment) => {
        if (comment.replies.length > 0) {
            let index = comment.replies.findIndex(reply => reply.id === id)
            delete comment.replies[index]
        }
        return comment
    })
    return array
}
