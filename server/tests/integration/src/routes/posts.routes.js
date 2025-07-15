const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([{ id: 1, title: 'Test Post' }]);
});

const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test-db');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

module.exports = router;
