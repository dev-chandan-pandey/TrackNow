const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

require('dotenv').config();

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "", // allow your frontend origin
    methods: ["GET", "POST"],
    credentials: true
  }
});
// Middleware
app.use(express.json());




// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});