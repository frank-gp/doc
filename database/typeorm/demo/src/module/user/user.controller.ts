import { Request, Response, NextFunction } from "express";
import { UsersService } from "./user.service";
import { AppError } from "../../middleware/error.middleware";

const service = new UsersService();

export class UsersController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await service.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await service.findOne(Number(req.params.id));
      if (!user) throw new AppError("User not found", 404);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await service.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await service.update(Number(req.params.id), req.body);
      if (!user) throw new AppError("User not found", 404);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const success = await service.remove(Number(req.params.id));
      if (!success) throw new AppError("User not found", 404);
      res.json({ message: "User deleted" });
    } catch (err) {
      next(err);
    }
  }
}
