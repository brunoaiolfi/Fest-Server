import { Router } from "express";
import BarController from "./controller/BarController";
import UserController from "./controller/UserController";
import { verifyToken } from "./middlewares/verifyToken";

const router = Router();

// * ROTA DE LOGIN
router.post("/signIn", UserController.signIn);

// * MIDDLEWARE DE VERIFICAÇÃO DE TOKEN
router.use(verifyToken);

// * ROTAS DOS USERS

// create user
router.post("/user", UserController.createUsers);
// edit user
router.put("/user/", UserController.updateUsers);
// get all users
router.get("/user/all", UserController.getAllUsers);
// get user by id
router.get("/user/", UserController.getUserById);
// get user by email
router.get("/user/email/", UserController.getUserByEmail);
// delete user
router.delete("/user/", UserController.deleteUsers);

// * ROTAS DAS MARCAÇÕES NO MAPA

// create bar
router.post("/bar", BarController.createBar);
// update bar
router.put("/bar", BarController.updateBar);
// get all bars
router.get("/bar/all", BarController.getAllBar)
// get all bars by id
router.get("/bar", BarController.getBarById) 
// get all bars by user id
router.get("/bar/userId/", BarController.getBarByUserId) 
// get mine bars 
router.get("/bar/mine/", BarController.getMineBars) 
// delete
router.delete("/bar", BarController.deleteBar) 

export { router };
