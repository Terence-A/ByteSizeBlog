const router = require("express").Router();
const { User, Post, Comment } = require("../models/");

// Get posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("allPosts", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (postData) {
      const post = PostData.get({ plain: true });
      res.render("singlePost", {
        post,
      });
    } else {
      res.status(400).end();
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

// Login route
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
