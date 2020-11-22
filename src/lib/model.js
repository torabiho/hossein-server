import fs from 'fs';

class MessageApp {
    constructor(filepath) {
        this.filepath = filepath
        this.messages = filepath ? this.readFromJson() : {}
    }
    
    getAll() {
        return this.messages
    }
    // C
    post(content) {
        if (content) {
            let item = {
                id: this.messages.length,
                content: content,
                date: new Date()
            }
            this.messages.push(item)
            this.writeToJson()
            return this.messages
        }
        else if (!content) {
            return []
        }
    }
    // R
    get(id) {
        return this.messages.filter(message => message.id == id)[0]
    }
    // U
    update(id, update) {
        let index = this.messages.map(message => message.id).indexOf(id)
        if (index >= 0) {
            this.messages[index].content = update
            this.writeToJson()
            return this.messages[id]
        }
        else {
            return []
        }
    }
    // D
    delete(id) {
        let index = this.messages.findIndex(message => message.id == id)
        if (index >= 0) {
            this.messages.splice(index, 1);
            this.writeToJson()
            return this.messages
        }
        else {
            return "Message not found in database"
        }
    }

    readFromJson() {
        return JSON.parse(fs.readFileSync(this.filepath, 'utf8', (err, data) => {
            if (err) throw err
        }));
    }

    writeToJson() {
        if (this.filepath) {
            const jsonItem = JSON.stringify(this.messages)
            fs.writeFileSync(this.filepath, jsonItem, (err) => {
                if (err) throw err;
            });
        }
    }
}
export default MessageApp