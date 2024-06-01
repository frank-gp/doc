// routes.js
const url = require("url");
const { getItems, getItemById, createItem, updateItem, deleteItem } = require("./controllers");

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Routing
  if (req.method === "GET" && parsedUrl.pathname === "/items") {
    getItems(req, res);
  } else if (req.method === "GET" && parsedUrl.pathname === "/items/:id") {
    getItemById(req, res);
  } else if (req.method === "POST" && parsedUrl.pathname === "/items") {
    createItem(req, res);
  } else if (req.method === "PUT" && parsedUrl.pathname === "/items/:id") {
    updateItem(req, res);
  } else if (req.method === "DELETE" && parsedUrl.pathname === "/items/:id") {
    deleteItem(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
}

module.exports = { handleRequest };
