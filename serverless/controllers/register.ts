import { Request, Response } from 'express';
import { myCreateUserWithEmailAndPassword } from './useAuth';

export async function registerFunction(req: Request, res: Response): Promise<any> {
  return myCreateUserWithEmailAndPassword(req.body.name, req.body.password, req.body.email).then(user => {
    /* res.sendStatus(200) */
    res.send(JSON.stringify(user))
  }).catch(error => {
    res.send(error);
  })
}