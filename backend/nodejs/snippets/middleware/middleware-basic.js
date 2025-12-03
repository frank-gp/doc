function myMiddleware(req, res, next) {
  // Do something with the request
  console.log("Middleware executed!");

  // Call the next middleware function in the stack
  next();
}
app.use(myMiddleware);
