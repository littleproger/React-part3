const fs = require("fs");

class connectWithDatabase {
  getAll(path) {
    return readFile(path);
  }
  getOne(id,path) {
    try {
      const users = readFile(path);
      return users.filter((user) => user.id === id)[0];
    } catch (error) {
      throw Error(error.toString());
    }
  }
  update(id, dataToUpdate,path) {
    try {
      const data = readFile(path);
      const updatedList = data.map((item) =>
        item.id === id ? { ...item, ...dataToUpdate } : item
      );
      writeFile(updatedList,path);
      return true;
    } catch (error) {
      throw Error(error.toString());
    }
  }
  delete(id,path) {
    try {
      const data = readFile(path);
      const newList = data.filter((item) => item.id !== id);
      writeFile(newList,path);
      return true;
    } catch (error) {
      throw Error(error.toString());
    }
  }
  add(newData,path) {
    try {
      const data = readFile(path);
      data.push(newData);
      writeFile(data,path);
      return true;
    } catch (error) {
      throw Error(error.toString());
    }
  }
  search(newData,path) {
    const data = readFile(path);
    const curentData= data.filter((item) => item.email === newData.email);
    if (curentData.length !== 0) {
      if (curentData[0].password === newData.password) {
        return curentData;
      } else {
        throw Error("Password is incorrect!");
      }
    } else {
      throw Error("User with this email not found!");
    }
    return true;
  }
}

function readFile(path) {
  try {
    let rawdata = fs.readFileSync(path);
    let users = JSON.parse(rawdata);

    return users;
  } catch (error) {
    throw Error(error.toString());
  }
}
function writeFile(data,path) {
  try {
    let users = JSON.stringify(data);
    fs.writeFileSync(path, users);

    return true;
  } catch (error) {
    throw Error(error.toString());
  }
}

module.exports = new connectWithDatabase();
