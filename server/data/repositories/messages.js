const { MessageModel } = require("../models/index.js");

class Message {
  async getById(id) {
    const message = await MessageModel.findByPk(id);
    return message.dataValues;
  }

  async getAll() {
    const messages = await MessageModel.findAll();
    return messages.map((message) => message.dataValues);
  }

  async addMessage(user) {
    const message = await MessageModel.create(user);
    return message.dataValues;
  }

  async updateById(id, data) {
    const [, [message]] = await MessageModel.update(data, {
      where: { id },
      returning: true,
    });
    return message.dataValues;
  }

  async deleteById(id) {
    const deletedRows = await MessageModel.destroy({
      where: { id },
    });

    return Boolean(deletedRows);
  }
}

module.exports = new Message();
