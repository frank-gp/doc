let domain;
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  domain = "http://localhost"; // For local development
} else {
  domain = "https://domain.com"; // For production
}

// ==========  ==========
let socket;
if (window.location.hostname === "localhost") {
  socket = new WebSocket("ws://localhost:3000");
} else {
  socket = new WebSocket(`wss://${window.location.host}`);
}
