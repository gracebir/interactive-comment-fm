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

export function updateReply(comments: Array<CommentData>, content: string, idComment: number, idReply: number) {
    try {
        const commentIndex = comments.findIndex(com => com.id === idComment)
        let index = comments[commentIndex].replies.findIndex(reply => reply.id === idReply)
        comments[commentIndex].replies[index].content = remoteFirstWork(content)
        return comments
    } catch (error) {
        console.log(error)
    }
}

export function deleteReply(comments: Array<CommentData>, idComment: number, id: number) {
    const commentIndex = comments.findIndex(com => com.id === idComment)
    let index = comments[commentIndex].replies.findIndex(reply => reply.id === id)
    delete comments[commentIndex].replies[index]
    return comments
}

export function updateComment(arr: Array<CommentData>, content: string, id: number) {
    const index = arr.findIndex(item => item.id === id)
    arr[index].content = content
    return arr.map((comment) => comment)
}

export function deleteComment(arr: Array<CommentData>, id: number) {
    const index = arr.findIndex(item => item.id === id)
    delete arr[index]
    return arr.map((comment) => comment)
}


export function splitContent(str: string) {
    let replyTo: string = ""
    const splitStr = str.split(" ")
    if (splitStr[0].includes("@")) {
        replyTo = splitStr.shift()!
    }

    return [replyTo.replace(/[@!.]/g, ""), splitStr.join(" ")]
}