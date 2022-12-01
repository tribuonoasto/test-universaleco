const seedData = [
  {
    insertOne: {
      firstName: "Antonio",
      lastName: "Banderas",
      email: "antonio.banderas@gmail.com",
      gender: "male",
      addr: [
        {
          street: "Upper Street",
          house: "No 1",
          city: "New York",
          country: "USA",
        },
      ],
    },
  },
  {
    insertOne: {
      firstName: "Celine",
      lastName: "Dion",
      email: "celine.dion@gmail.com",
      gender: "female",
      addr: [
        {
          street: "Upper Street",
          house: "No 3",
          city: "New York",
          country: "USA",
        },
        {
          street: "Upper Street",
          house: "No 1",
          city: "London",
          country: "UK",
        },
      ],
    },
  },
  {
    insertOne: {
      firstName: "Enrique",
      lastName: "Felipe",
      email: "Enrique.Felipe@gmail.com",
      gender: "male",
    },
  },
];

module.exports = { seedData };
