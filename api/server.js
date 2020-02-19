const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// IMPORT ROUTERS HERE

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// USE ROUTERS HERE

server.get('/', (req, res) => {
  res.status(200).json({ api: "up" })
});

module.exports = server;