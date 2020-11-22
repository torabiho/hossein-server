import MessageApp from './model.js'

let messageApp = new MessageApp(`json/messages.json`)

export const getAll = () => {
    return new Promise((resolve, reject) => {
        var result = messageApp.getAll()
        if (result !== {}) {
            resolve(result)
        } else {
            reject('portfolio data not found in database')
        }
    })
}

export const getSingleMessage = id => {
    return new Promise((resolve, reject) => {
        let result = messageApp.get(id)
        if (result) {
            resolve(result)
        } else {
            reject('Message not found in database')
        }
    })
}

export const post = content => {
    return new Promise((resolve, reject) => {
        let message = messageApp.post(content)
        if (message.length !== 0) {
            resolve(message)
        } else {
            reject("You can't post an empty message")
        }
    })
}

export const updateMessage = (id, content) => {
    return new Promise((resolve, reject) => {
        let message = messageApp.update(id, content)
        if (message.length !== 0) {
            resolve(message)
        } else {
            reject("You can't post an empty message")
        }
    })
}

export const deleteMessage = id => {
    return new Promise((resolve, reject) => {
        let result = messageApp.delete(id)
        if (result !== 'Message not found in database') {
            resolve(result)
        } else {
            reject(result)
        }
    })
}