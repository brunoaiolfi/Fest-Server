import { Router } from "express";
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

// create marker
router.post("/marker",)


export { router };
