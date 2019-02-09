import { Request, Response } from 'express';
import logger from '../util/logger';

export async function exampleFunction(req: Request, res: Response): Promise<any> {
  logger.log('info', 'Listing all orders');
  try {
    res.sendStatus(200);
  } catch (exception) {
    logger.log('error', exception);
    res.sendStatus(500);
  }
}
