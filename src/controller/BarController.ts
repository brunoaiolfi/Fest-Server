import { Request, Response } from "express";
import { BarPostBodyRequest, BarValues } from "../../models/Bar";
import {
  deleteBar,
  getAllBar,
  getBarById,
  getBarByUserId,
  postBar,
  putBar,
} from "../service/Bar";
import { verifyBarValues } from "../utils/verify_bar_values";

export default {
  // create
  async createBar(req: Request, res: Response) {
    try {
      const reqValues = req.body as BarPostBodyRequest;
      const { id } = res.locals;

      console.log(id)
      const values: BarValues = {
        userId: id,
        adress: reqValues.adress,
        close_hour: reqValues.close_hour,
        complement: reqValues.complement,
        description: reqValues.description,
        latitude: reqValues.latitude,
        longitude: reqValues.longitude,
        name: reqValues.name,
        number: reqValues.number,
        open_hour: reqValues.open_hour,
        opened_at_days: reqValues.opened_at_days,
        zip_code: reqValues.zip_code,
      };

      const areBarValuesValid = verifyBarValues(values);

      if (!areBarValuesValid || !id)
        return res.status(400).send("Preencha todos os campos corretamente!");

      const response = await postBar(values);

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // update
  async updateBar(req: Request, res: Response) {
    try {
      const reqValues = req.body as BarValues;
      const { id: userId } = res.locals;
      const id = Number(req.query.id);

      const existentBar = await getBarById(id);

      if (!existentBar) return res.status(404).send("Este bar não existe!");

      if (reqValues.userId !== userId)
        return res
          .status(400)
          .send("O usuário não pode editar um bar que não o pertence!");

      const areBarValuesValid = verifyBarValues(reqValues);

      if (!areBarValuesValid || !id)
        return res.status(400).send("Preencha todos os campos corretamente!");

      const response = await putBar(reqValues, id);

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // delete
  async deleteBar(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);

      const existentBar = await getBarById(id);

      if (!existentBar) return res.status(404).send("Este bar não existe!");

      await deleteBar(id);

      return res.json({
        message: "Bar deletado!",
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!")
    }
  },

  // get all
  async getAllBar(req: Request, res: Response) {
    try {
      const response = await getAllBar();

      if (!response.length) return res.status(404).send("Nenhum bar encontrado!");

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // get bt userId
  async getBarByUserId(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);

      if (!id)
        return res.status(404).send("Preencha todos os campos corretamente!");

      const response = await getBarByUserId(id);

      if (!response.length)
        return res.status(404).send("Nenhum bar encontrado!");

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  async getBarById(req: Request, res: Response) {
    try {
      const id = Number(req.query.id);
      console.log(id);
      if (!id)
        return res.status(404).send("Preencha todos os campos corretamente!");

      const response = await getBarById(id);

      if (!response) return res.status(404).send("Nenhum bar encontrado!");

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },

  // get bt userId
  async getMineBars(req: Request, res: Response) {
    try {
      const { id } = res.locals;

      if (!id) return res.status(404).send("Id do usuário não encontrado!");

      const response = await getBarByUserId(id);

      if (!response.length)
        return res.status(404).send("Nenhum bar encontrado!");

      return res.json({
        bar: response,
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro no servidor!");
    }
  },
};
