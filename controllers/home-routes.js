const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Home");
  res.render("./layouts/main");
});

router.get("/login", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  console.log("login");
  res.render("login");
});

module.exports = router;
