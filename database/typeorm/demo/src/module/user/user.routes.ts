import { Router } from "express";
import { UsersController } from "./user.controller";

const router = Router();
const controller = new UsersController();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", asyncHandler(controller.getAll.bind(controller)));
router.get("/:id", asyncHandler(controller.getOne.bind(controller)));
router.post("/", asyncHandler(controller.create.bind(controller)));
router.patch("/:id", asyncHandler(controller.update.bind(controller)));
router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

// router.get("/", (req, res, next) => controller.getAll(req, res, next));
// router.get("/:id", (req, res, next) => controller.getOne(req, res, next));
// router.post("/", (req, res, next) => controller.create(req, res, next));
// router.put("/:id", (req, res, next) => controller.update(req, res, next));
// router.delete("/:id", (req, res, next) => controller.delete(req, res, next));

export default router;
