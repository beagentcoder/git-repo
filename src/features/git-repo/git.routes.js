import express from "express"

const gitRouter =express.Router();
import GitController from "./git.controller.js";
const gitController =new GitController
gitRouter.get("/",gitController.getRepoInfo)


export default gitRouter;