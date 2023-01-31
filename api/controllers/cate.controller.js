const { response } = require("express");
const fs = require("fs");
const uuid = require("uuid");

const cateFile = process.cwd() + "/data/category.json";

exports.getAll = (request, response) => {
  fs.readFile(cateFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedCateData = JSON.parse(data);

    return response.json({ status: true, result: savedCateData });
  });
};

exports.create = (request, response) => {
  const {cateName} = request.body;
  fs.readFile(cateFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }
    const parsedData = data ? JSON.parse(data) : [];

    const newObj = { id: uuid.v4(), cateName, };

    parsedData.push(newObj);

    fs.writeFile(cateFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }
      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id, cateName, link } = request.body;
  fs.readFile(cateFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((cateObj) => {
      if (cateObj.id == id) {
        return { ...cateObj, cateName, link };
      } else {
        return cateObj;
      }
    });

    fs.writeFile(cateFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }
      return response.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (request, response) => {
  const { id } = request.params;
  fs.readFile(cateFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(cateFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, message: deletedData });
    });
  });
};
