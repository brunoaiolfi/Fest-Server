import { config } from "dotenv";
import { sign } from "jsonwebtoken";

config();

const { SECRET } = process.env;
if (!SECRET) throw new Error("SECRET não encontrado nas variáveis de ambiente");

export async function generateUserToken(email: string, id: number) {
  try {
    const tokenInfo = { email, id };
    const token = sign(tokenInfo, String(SECRET), { expiresIn: "12h" });

    return token;
  } catch (error) {
    throw error;
  }
}
