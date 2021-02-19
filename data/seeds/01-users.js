exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "user1",
          password: "test",
          email: "user1@email.com",
        },
        {
          id: 2,
          username: "user2",
          password: "test",
          email: "user2@email.com",
        },
        {
          id: 3,
          username: "user3",
          password: "test",
          email: "user3@email.com",
        },
      ]);
    });
};
