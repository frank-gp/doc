const express = require("express");

const app = express();
app.use(express.static("."));

const data = [
  { back_half: "google", destination: "https://google.com", engagements: 0 },
  { back_half: "example", destination: "https://example.com", engagements: 0 },
];

app.get("/data.json", (req, res) => {
  res.json(data);
});

app.get("/:path", (req, res) => {
  const req_params = req.params.path;
  const dataFind = data.find((entry) => {
    return entry.back_half === req_params;
  });

  if (dataFind) {
    dataFind.engagements++;
    console.log(dataFind);
    // res.redirect(dataFind.destination);
    res.json({
      success: true,
      data: dataFind,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Not Found",
      data: data,
    });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
