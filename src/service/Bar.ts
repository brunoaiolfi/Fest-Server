import { BarValues } from "./../../models/Bar";
import { PrismaClient } from "@prisma/client";
import { User } from "../../models/User";

const prisma = new PrismaClient();

export async function postBar(value: BarValues) {
  try {
    const data = await prisma.bar.create({
      data: {
        adress: value.adress,
        close_hour: value.close_hour,
        latitude: value.latitude,
        longitude: value.longitude,
        name: value.name,
        number: value.number,
        open_hour: value.open_hour,
        zip_code: value.zip_code,
        complement: value.complement,
        description: value.description,
        opened_at_days: value.opened_at_days,
        userId: value.userId,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putBar(value: BarValues, id: number) {
  try {
    const data = await prisma.bar.update({
      where: {
        id,
      },
      data: {
        adress: value.adress,
        close_hour: value.close_hour,
        latitude: value.latitude,
        longitude: value.longitude,
        name: value.name,
        number: value.number,
        open_hour: value.open_hour,
        zip_code: value.zip_code,
        complement: value.complement,
        description: value.description,
        opened_at_days: value.opened_at_days,
        userId: value.userId,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllBar() {
  try {
    const response = await prisma.bar.findMany();
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getBarByUserId(id: number) {
  try {
    const response = await prisma.bar.findMany({
      where: {
        userId: id,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getBarById(id: number) {
  try {
    const response = await prisma.bar.findUnique({
      where: {
        id,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteBar(id: number) {
  try {
    await prisma.bar.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
