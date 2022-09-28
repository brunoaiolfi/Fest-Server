import { PrismaClient } from "@prisma/client";
import { User } from "../../models/User";

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
    const tempStates = await prisma.user.findFirst({ where: { email } });

    // E retorna o que achou
    return tempStates;
  } catch (error) {
    throw new Error(error);
  }
}

// Post user
export async function postUser(name: string, email: string, password: string) {
  try {
    // Cria o usuário
    const data: User = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // E retorna o usuário criado
    return data;
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
    console.log(login, password);

    const response = await prisma.user.findFirst({
      where: {
        email: login,
        password: password,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}
