import { BarValues } from "./../../models/Bar";

/**
 * Verifica se os valores do Bar estão preenchidos corretamente
 * 
 * @param value BarValues
 * @returns boolean
 */
export function verifyBarValues(value: BarValues) {
  if (
    value.name &&
    value.opened_at_days &&
    value.open_hour &&
    value.close_hour &&
    value.adress &&
    value.zip_code &&
    value.number &&
    value.latitude &&
    value.longitude &&
    value.userId
  ) {
    return true;
  }
  return false;
}
