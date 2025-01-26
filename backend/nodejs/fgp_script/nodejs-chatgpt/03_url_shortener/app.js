const express = require("express");
const mysql = require("mysql2/promise");
const shortid = require("shortid");
const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Configuration
const dbConfig = {
  host: "localhost",
  user: "fgpooswu_nodejs",
  password: "1234!@#$asdfASDF",
  database: "fgpooswu_nodejs",
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Render the homepage with shortened URLs
app.get("/", async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query("SELECT * FROM urls");
    const currentDomain = req.protocol + "://" + req.get("host");
    res.render("index", { currentDomain, urls: result, error: null });
  } catch (error) {
    res.render("error", { message: "Failed to fetch URLs" });
  } finally {
    connection.release();
  }
});

// API endpoint to shorten a URL
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = shortid.generate();

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query("INSERT INTO urls (original_url, short_code) VALUES (?, ?)", [originalUrl, shortCode]);

    const currentDomain = req.protocol + "://" + req.get("host");
    const shortUrl = currentDomain + "/" + shortCode;

    res.redirect("/");

    res.render("index", { currentDomain, urls: result, shortUrl, error: null });
  } catch (error) {
    res.render("error", { message: "Failed to shorten the URL" });
  } finally {
    connection.release();
  }
});

// API endpoint to redirect to the original URL (unchanged code for URL redirection)

// Display all URLs
app.get("/display", async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query("SELECT * FROM urls");
    const currentDomain = req.protocol + "://" + req.get("host");
    res.render("display", { currentDomain, urls: result });
  } catch (error) {
    res.render("error", { message: "Failed to fetch URLs" });
  } finally {
    connection.release();
  }
});

// API endpoint to redirect to the original URL
app.get('/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
  
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        'SELECT original_url FROM urls WHERE short_code = ?',
        [shortCode]
      );
  
      if (result.length === 0) {
        res.render('error', { message: 'URL not found' });
      } else {
        res.redirect(result[0].original_url);
      }
    } catch (error) {
      res.render('error', { message: 'Failed to redirect' });
    } finally {
      connection.release();
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
