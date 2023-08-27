const router = require("express").Router();

router.get("/", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  console.log("dashboard");
  res.render("dashboard");
});
// })

module.exports = router;
