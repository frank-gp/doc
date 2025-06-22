# Scaffolding

```bash

.
├── dtos-entities
│   ├── entity.dto.ts
│   └── entity.entity.ts
├── entity.controller.ts
├── entity.routes.ts
└── entity.service.ts

```

#

```ts
// entity.routes.ts
const router = Router();
const controller = new EntityController();

router.get("/findAll", asyncHandler(controller.findAll.bind(controller)));
router.get("/findOne/:id", asyncHandler(controller.findOne.bind(controller)));
router.post("/create", asyncHandler(controller.create.bind(controller)));
router.patch("/update/:id", asyncHandler(controller.update.bind(controller)));
router.delete("/remove/:id", asyncHandler(controller.remove.bind(controller)));

// entity.controller.ts
export class EntityController {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await service.register(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      next(new AppError(err.message, 400));
    }
  }
}

// entity.service.ts
export class EntityService {
  private repo: Repository<CurrentEntity>;

  constructor() {
    this.repo = AppDataSource.getRepository(EntityEntity);
    this.visitRepo = AppDataSource.getRepository(EntityVisitEntity);
  }

  async findAll(): Promise<EntityEntity[]> {
    return await this.repo.find();
  }
}
```
