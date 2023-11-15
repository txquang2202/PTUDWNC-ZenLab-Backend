import {
  createUser,
  editUser,
  getUserProfile,
} from "../controller/userController.js";
import { handleLogin } from "../controller/authController.js";
import { authenticateJWT } from "../middleware/jwt.js";
import express from "express";
import { checkUserToken } from "../middleware/jwt.js";
import upload from "../middleware/multer.js";

const router = express.Router();
// @param {*} app: express app

const checkLogin = (req, res, next) => {
  const nonSecurePath = ["/", "/signup", "/signin"];
  if (nonSecurePath.includes(req.path)) return next();

  if (user) {
    next();
  } else {
  }
};
const initApi = (app) => {
  router.post("/signUp", createUser);
  router.post("/login", handleLogin);
  router.get("/home", checkUserToken);
  router.post("/protected", authenticateJWT);
  router.get("/getprofile/:id", getUserProfile);
  router.put("/editprofile/:id", upload.single("img"), editUser);
  router.get("/", (req, res) => {
    const welcomeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        </head>
        <body>
            <h1>Welcome to our ZenClass!</h1>
            <p>The Back End is running</p>
        </body>
        </html>
    `;
    res.send(welcomeHTML);
  });

  return app.use("/api/v1/", router);
};

export default initApi;
