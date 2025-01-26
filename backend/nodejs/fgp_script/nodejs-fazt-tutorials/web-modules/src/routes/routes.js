import { Router } from "express";

const app = Router();

app.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "First Website with nodejs"
  });
});
app.get("/about", (req, res) => {
  res.render("about.ejs",{
    title: "about.ejs"

  });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs",{
    title: "contact.ejs"

  });
});

export default app;
