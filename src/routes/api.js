const express = require("express");
const blogController = require("../controller/BlogController")

const router = express.Router();




// C=Create
router.post("/create-blog", blogController.CreateBlog);


// R=Read
router.get("/read-product", blogController.ReadBlog);
router.get("/ReadBlogByID/:id", blogController.ReadBlogByID);



// U=Update
router.post("/UpdateBlog/:id", blogController.UpdateBlog);


// // Delete
router.get("/DeleteBlog/:id", blogController.DeleteBlog);


module.exports = router;