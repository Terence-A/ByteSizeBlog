// connects routes
const router = require("express").Router();

//api and home routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

// if page not found
router.use((req, res) => {
  res.status(404).end();
});

// exports router
module.exports = router;
