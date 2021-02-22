const connectWithDatabase = require('./connectWithDatabase');

const path = "./users.json";

class UserService {

    getAll(){
        const item = connectWithDatabase.getAll(path);
        if(!item) {
            throw Error('Users not found');
        }
        return item;
    }

    getOne(id){
        const item = connectWithDatabase.getOne(id,path);
        if(!item) {
            throw Error('User not found');
        }
        return item;
    }

    update(id, dataToUpdate) {
        const item = connectWithDatabase.update(id,dataToUpdate,path);
        if(!item) {
            throw Error('User not found!')
        }
        return item
    }

    delete(id) {
        const item = connectWithDatabase.delete(id,path)
        if(item.length===0) {
            throw Error('User not found!')
        }
        return item
    }

    add(user) {
        const item = connectWithDatabase.add(user,path);
        if(!item) {
            throw Error("User entity to create is not valid");
        }
        return item;
    }

    search(search) {
        const item = connectWithDatabase.search(search,path);
        if(!item) {
            throw Error("User not found!")
        }
        return item;
    }
}

module.exports = new UserService();