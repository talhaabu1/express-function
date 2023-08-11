const express = require("express");
const app = express();
const port = 3000;

// Json File Accept
app.use(express.json());
// _______E___________N_____________D_________

// Raw File Accept
app.use(express.raw());
// _______E___________N_____________D_________

// Text File Accept
app.use(express.text());
// _______E___________N_____________D_________

// X-www-form-urlencoded File Accept
app.use(express.urlencoded());
// _______E___________N_____________D_________

// Folder and file and html and text and other files accept
app.use(express.static(`${__filename}/Public/`));
app.use(express.static(`${__dirname}/Public/`));
// _______E___________N_____________D_________

// Router very simple and call infinite routers options = 1-caseSensitive , 2-mergeParams 3-strict
const router = express.Router({
  caseSensitive: false,
  mergeParams: true,
  strict: true,
});
// _______E___________N_____________D_________

// Route use call
app.use(router);

router.get("/home", (req, res) => {
  res.send("Welcome to our server! guide your name");
});

app.post("/home", (req, res) => {
  res.send("THis is a nodjes server: ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
