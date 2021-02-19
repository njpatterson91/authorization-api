exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          userID: 1,
          productName: "product1",
          productKey: "1111",
          activeStatus: "1",
          expires: "03/03/21",
        },
        {
          id: 2,
          userID: 1,
          productName: "product2",
          productKey: "2222",
          activeStatus: "1",
          expires: "03/03/21",
        },
        {
          id: 3,
          userID: 1,
          productName: "product3",
          productKey: "3333",
          activeStatus: "1",
          expires: "03/03/21",
        },
      ]);
    });
};
