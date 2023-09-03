const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

// Get users posts withAuth
router.get("/", withAuth, async (req, res) => {
  try {
    // Find user id and incl their posts
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    // Pass their posts to the view & render into all posts admin using dashboard layout:
    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );
    res.render("allPostsAdmin", { layout: "dashboard", posts });
  } catch (err) {
    // if no active posts, redirect to login page:
    res.redirect("login");
  }
});

// render for new post in layout of dashboard

router.get("/new", withAuth, async (req, res) => {
  try {
    res.render("newPost", { layout: "dashboard" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// post.findByPk(req.params.id), then render into edit post with layout of dashboard

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({
        plain: true,
      });
      res.render("editPost", { layout: "dashboard", post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
