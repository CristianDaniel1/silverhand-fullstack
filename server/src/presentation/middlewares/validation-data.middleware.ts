import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { CustomError } from '../../shared/errors/custom.error';

export const validateData =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          message: CustomError.unprocessableEntity('Erro ao validar os dados')
            .message,
          errors: error.issues.map(issue => {
            return issue.message;
          }),
        });
      }

      return res.status(500).json({ error: 'Ocurreu um erro inesperado' });
    }
  };
