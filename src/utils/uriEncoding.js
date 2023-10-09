export const encodeURI = (uri) => {
    return uri.replace(/ /g, '+')
}

export const decodeURI = (uri) => {
    return uri.replace(/\+/g, ' ')
}