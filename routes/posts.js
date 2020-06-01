const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET POSTS
router.get("/", async (req, res) => {
  try {
    const dbData = await Post.find();
    res.json(dbData);
    console.log(dbData);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
router.post("/", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const data = await newPost.save();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET SPECIFIC POST
router.get("/:postId", async (req, res) => {
  const specificData = await Post.findById(req.params.postId);
  res.json(specificData);
});

// UPDATE SPECIFIC POST
router.patch("/:postId", async (req, res) => {
  const updateData = await Post.updateOne(
    { _id: req.params.postId },
    { $set: { title: req.body.title } }
  );
  res.json(updateData);
});

// DELETE SPECIFIC POST
router.delete("/:postId", async (req, res) => {
  const updateData = await Post.remove({ _id: req.params.postId });
  res.json(updateData);
});

module.exports = router;
