// web socket server
const WebSocket = require("ws");

// wss refers to the server itself - 'websocket server'
const wss = new WebSocket.Server({ port: 8082 });

// ws below refers to a single connection to the server
// a user with multiple connections or many users will lead to many different ws objects
wss.on("connection", (ws) => {
  console.log("new client connected!");

  // receive a message from client and log
  ws.on("message", (data) => {
    console.log(`client has sent us: ${data}`);
    // console.log(data.toString().toUpperCase());
    // send message to client, just send what we received as uppercase
    ws.send(data.toString().toUpperCase());
  });

  // note how the close refers to the single connection (ws) and not the server (wss)
  ws.on("close", () => {
    console.log("client has disconnected!");
  });
});
