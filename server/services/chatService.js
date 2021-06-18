// import * as connectWithDatabase from './connectWithDatabase.js';
const Message = require("../data/repositories/messages.js");

// const path = "./messages.json";

class ChatService {
  async getAll() {
    const item = await Message.getAll();
    if (!item) {
      throw Error("Messages not found");
    }
    return item;
  }

  async update(id, dataToUpdate) {
    const item = await Message.updateById(id, dataToUpdate);
    if (!item) {
      throw Error("Message not found!");
    }
    return item;
  }

  async delete(id) {
    const item = await Message.deleteById(id);
    if (!item) {
      throw Error("Message not found!");
    }
    return item;
  }

  async add(message) {
    const item = await Message.addMessage(message);
    if (!item) {
      throw Error("Message entity to create is not valid");
    }
    return item;
  }
}

module.exports = new ChatService();
