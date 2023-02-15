const { response } = require("express");
const fs = require("fs");
const uuid = require("uuid");

const userFile = process.cwd() + "/data/user.json";

exports.getAll = (request, response) => {
  fs.readFile(userFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = JSON.parse(data);

    return response.json({ status: true, result: savedData });
  });
};

exports.create = (request, response) => {
  const { userName, userPass, } = request.body;
  fs.readFile(userFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }
    const parsedData = data ? JSON.parse(data) : [];

    const newObj = { id: uuid.v4(), userName, userPass };

    parsedData.push(newObj);

    fs.writeFile(userFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }
      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id } = request.params;
  const { userName, userPass } = request.body;
  fs.readFile(userFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((userObj) => {
      if (userObj.id == id) {
        return { ...userObj, userName, userPass };
      } else {
        return userObj;
      }
    });

    fs.writeFile(userFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }
      return response.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (request, response) => {
    const { id } = request.params;
    console.log(request.params);
  fs.readFile(userFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(userFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, message:deletedData });
    });
  });
};
