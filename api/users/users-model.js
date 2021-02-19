const db = require("../../data/dbConfig");

module.exports = {
  create,
  update,
  remove,
  getByUsername,
};

async function create(data) {
  await db("users").insert(data);
  return { Message: `User ${data.username} created!` };
}

async function update(id, data) {
  await db("users").where("id", id).update(data);
  return { Message: `User ${data.username} updated!` };
}

function remove(id) {
  return db("users").where("id", id).delete();
}

function getByUsername(name) {
  return db("users").where("username", name);
}