const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon app déployée sur Vercel !");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port http://localhost:${port}`));
