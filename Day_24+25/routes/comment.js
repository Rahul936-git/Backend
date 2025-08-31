const express= require("express");

const post = require("../src/post_comment");
const send = require("../src/get_comment");
const update = require("../src/patch_comment");
const delete_comment = require("../src/delete_comment");

const commentRouter= express.Router();

commentRouter.post("/:id",post)

commentRouter.get("/",send)

commentRouter.patch("/",update)

commentRouter.delete("/",delete_comment)

module.exports= commentRouter;