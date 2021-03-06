exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("lists")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("lists").insert([
        {
          board_id: 1,
          title: "Todo",
          position: 1000
        },
        {
          board_id: 1,
          title: "Doing",
          position: 2000
        },
        {
          board_id: 1,
          title: "Completed",
          position: 3000
        }
      ]);
    });
};
