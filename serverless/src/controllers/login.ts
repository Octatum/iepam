import { Request, Response } from 'express';
import { mySignInWithEmailAndPassword } from './useAuth';

export async function loginFunction(req: Request, res: Response): Promise<any> {
  mySignInWithEmailAndPassword(req.body.email, req.body.password)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
}
