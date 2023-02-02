const { response } = require("express");
const fs = require("fs");
const uuid = require("uuid");

const productFile = process.cwd() + "/data/product.json";

exports.getAll = (request, response) => {
  fs.readFile(productFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = JSON.parse(data);

    return response.json({ status: true, result: savedData });
  });
};

exports.create = (request, response) => {
  const { image, title, description, price, rating, brand, category } =
    request.body;
  fs.readFile(productFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }
    const parsedData = data ? JSON.parse(data) : [];

    const newObj = {
      id: uuid.v4(),
      image,
      title,
      description,
      price,
      rating,
      brand,
      category,
    };

    parsedData.push(newObj);

    fs.writeFile(productFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }
      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id, link, position } = request.body;
  fs.readFile(productFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((productObj) => {
      if (productObj.id == id) {
        return {
          ...productObj,
          image,
          title,
          description,
          price,
          rating,
          brand,
          category,
        };
      } else {
        return productObj;
      }
    });

    fs.writeFile(productFile, JSON.stringify(updateData), (writeErr) => {
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
  fs.readFile(productFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(productFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, message: deletedData });
    });
  });
};
