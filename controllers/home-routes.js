const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Home");
  res.render("homepage");
});

router.get("/homepage", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  console.log("homepage");
  res.render("homepage");
});

// router.get("/dashboard", (req, res) => {
//   res.render("./layouts/dashboard", {
//     layout: "dashboard",
//   });
// });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
