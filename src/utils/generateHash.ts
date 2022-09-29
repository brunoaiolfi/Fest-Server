import { createHash } from "crypto";
import { config } from "dotenv";

config();

const { HASH } = process.env;

/**
 * 
 * Função que converte um valor de string para um hash
 * 
 * @param data String
 * @returns Hash String
 */
export function generateHash(data: string) {
  if (!HASH) throw new Error("HASH não encontrado nas variáveis de ambiente!");

  const hash = createHash(HASH);
  hash.update(data);
  return hash.digest("hex");
}
