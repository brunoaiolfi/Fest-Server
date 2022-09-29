import { PrismaClient } from "@prisma/client";
import { User } from "../../models/User";
import { generateHash } from "../utils/generateHash";

const prisma = new PrismaClient();

// Get user by email
export async function getUserAll() {
  try {
    const response = await prisma.user.findMany();
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// Get User By Id
export async function getUserById(id: number) {
  try {
    const response = await prisma.user.findUnique({ where: { id } });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// Get user by email
export async function getUserByEmail(email: string) {
  try {
    // coleta o estado pelo nome
    const response = await prisma.user.findFirst({ where: { email } });

    // E retorna o que achou
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// Post user
export async function postUser(name: string, email: string, password: string) {
  try {
    const hashedPassword = generateHash(password);
    // Cria o usuário
    const data: User = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // E retorna o usuário criado
    return {...data, password: ''};
  } catch (error) {
    throw new Error(error);
  }
}

export async function putUser(name: string, email: string, id: number) {
  try {
    const response = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(id: number) {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (error) {
    throw new Error(error);
  }
}

export async function signIn(login: string, password: string) {
  try {
    const hashedPassword = generateHash(password)

    const response = await prisma.user.findFirst({
      where: {
        email: login,
        password: hashedPassword,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}
