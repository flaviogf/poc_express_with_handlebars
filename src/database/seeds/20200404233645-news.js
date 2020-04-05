module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("news", [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        subtitle:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        author: "Frank",
        date: new Date(),
        content: `
            <h1>Lorem ipsum dolor sit amet</h1>
            <h2>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          `,
        image: "https://picsum.photos/512",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("news");
  },
};
