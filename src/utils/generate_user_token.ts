import { config } from "dotenv";
import { sign } from "jsonwebtoken";

config();

const { SECRET } = process.env;
if (!SECRET) throw new Error("SECRET não encontrado nas variáveis de ambiente");

/**
 * Função para gerar o token do usuário
 * 
 * 
 * @param email string
 * @param id number
 * @returns token
 */
export async function generateUserToken(email: string, id: number) {
  try {
    const tokenInfo = { email, id };
    const token = sign(tokenInfo, String(SECRET), { expiresIn: "12h" });

    return token;
  } catch (error) {
    throw error;
  }
}
