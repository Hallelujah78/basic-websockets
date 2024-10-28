// web socket server
const WebSocket = require("ws");

// wss refers to the server itself - 'websocket server'
const wss = new WebSocket.Server({ port: 8082 });

// ws below refers to a single connection to the server
// a user with multiple connections or many users will lead to many different ws objects
wss.on("connection", (ws) => {
  console.log("new client connected!");
});
