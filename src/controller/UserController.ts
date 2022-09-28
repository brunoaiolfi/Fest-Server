import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import {
  deleteUser,
  getUserAll,
  getUserByEmail as getUserByEmailService,
  getUserById as getUserByIdService,
  postUser,
  putUser,
  signIn,
} from "../service/User";
import { generateUserToken } from "../utils/generate_user_token";
import { ResponseLogin } from "../../models/User";

export default {
  // * GET ALL
  async getAllUsers(req: Request, res: Response) {
    try {
      const response = await getUserAll();

      if (!response) return res.status(404).send("Nenhum usuário encontrado!");

      return res.json({ users: response });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // * GET BY ID
  async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);

      if (!id) {
        return res.status(400).send("ID não especificado!");
      }

      const user = await getUserByIdService(id);

      if (!user) return res.status(404).send("Nenhum usuário encontrado!");

      return res.json({
        user,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // * GET BY ID
  async getUserByEmail(req: Request, res: Response) {
    try {
      const email = String(req.query.email);

      if (!email) {
        return res.status(400).send("Email não especificado!");
      }

      const user = await getUserByEmailService(email);

      if (!user) return res.status(404).send("Nenhum usuário encontrado!");

      return res.json({
        user,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // * POST
  async createUsers(req: Request, res: Response) {
    try {
      const { email, name, password }: User = req.body;

      // Verifica se os valores não estão nulos
      if (!email || !name || !password) {
        return res.status(400).send("Preencha todos os campos corretamente!");
      }

      // Verifica se o usuário já existe
      const existentUser = await getUserByEmailService(email);
      if (existentUser) return res.status(409).send("Usuário já existente!");

      const response = await postUser(name, email, password);

      return res.json({
        user: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // * PUT
  async updateUsers(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);
      const { email, name }: User = req.body;

      // Verifica se os valores não estão nulos
      if (!email || !name || !id) {
        return res.status(400).send("Preencha todos os campos corretamente!");
      }

      // Verifica se o email já esta em uso
      const existentUser = await getUserByEmailService(email);
      if (existentUser && existentUser?.id !== id) {
        return res.status(400).send("Este email já esta em uso!");
      }

      const response = await putUser(name, email, id);

      return res.json({
        user: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // * DELETE
  async deleteUsers(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);

      const user = await getUserByIdService(id);

      if (!user) return res.status(404).send("Nenhum usuário encontrado!");

      await deleteUser(id);

      return res.json({
        message: "Usuário deletado!",
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  async signIn(req: Request, res: Response) {
    try {
      const { login, password } = req.body;

      if (!login || !password)
        return res.status(400).send("Preencha todos os campos corretamente!");

      const user = await signIn(login, password);

      if (!user) return res.status(404).send("Nenhum usuário encontrado!");

      const token = await generateUserToken(user.email, user.id);

      const responseLogin: ResponseLogin = {
        userName: user.name,
        token,
      };

      res.status(200).send(responseLogin);
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },
};
