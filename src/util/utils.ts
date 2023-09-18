export function lowerFirstChar(str: string) {
    const split = str.split('')
    split[0] = split[0].toLowerCase()
    return split.join('')
}