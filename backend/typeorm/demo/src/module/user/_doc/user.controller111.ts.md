import { Request, Response } from "express";
import { UsersService } from "./user.service";

const service = new UsersService();

export class UsersController {
  async getAll(req: Request, res: Response) {
    const users = await service.findAll();
    res.json(users);
  }

  async getOne(req: Request, res: Response) {
    const user = await service.findOne(Number(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  }

  async create(req: Request, res: Response) {
    try {
      const user = await service.create(req.body);
      res.status(201).json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  async update(req: Request, res: Response) {
    const user = await service.update(Number(req.params.id), req.body);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  }

  async delete(req: Request, res: Response) {
    const success = await service.remove(Number(req.params.id));
    if (!success) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  }
}
