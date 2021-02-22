const connectWithDatabase = require('./connectWithDatabase');

const path = "./messages.json";

class ChatService {

    getAll(){
        const item = connectWithDatabase.getAll(path);
        if(!item) {
            throw Error('Messages not found');
        }
        return item;
    }

    update(id, dataToUpdate) {
        const item = connectWithDatabase.update(id,dataToUpdate,path);
        if(!item) {
            throw Error('Message not found!')
        }
        return item
    }

    delete(id) {
        const item = connectWithDatabase.delete(id,path);
        if(item.length===0) {
            throw Error('Message not found!')
        }
        return item
    }

    add(user) {
        const item = connectWithDatabase.add(user,path);
        if(!item) {
            throw Error("Message entity to create is not valid");
        }
        return item;
    }
}

module.exports = new ChatService();