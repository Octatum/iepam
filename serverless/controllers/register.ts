import { Request, Response } from 'express';
import Passport from 'passport';

export async function registerFunction(req: Request, res: Response): Promise<any> {
  try {
    res.sendStatus(200);
  } catch (exception) {
    res.sendStatus(500);
  }
}