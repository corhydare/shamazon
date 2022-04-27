const router = require("express").Router();

const userRoutes = require("./User");
const postRoutes = require("./Post");
const commentRoutes = require("./Comment");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
