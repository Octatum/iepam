import { Request, Response } from 'express';
import { myCreateUserInFirestore } from './useAuth';

export async function createUser(req: Request, res: Response): Promise<any> {
  const { userId, name, email } = req.body;
  console.log(userId, name, email)
  return myCreateUserInFirestore(userId, {name, email}).then(user => {
    /* res.sendStatus(200) */
    res.send(JSON.stringify(user))
  }).catch(error => {
    res.send(error);
  })
}