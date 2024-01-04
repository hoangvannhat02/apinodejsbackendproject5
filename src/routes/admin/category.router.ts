import { Router } from "express";
import { container, injectable } from "tsyringe";
import { CategoryController } from "../../controllers/admin/category.controller";
const categoryRouter = Router();

const categoryController = container.resolve(CategoryController);
categoryRouter.get('/data',categoryController.get.bind(categoryController));
categoryRouter.get('/databyid/:id',categoryController.getdatabyid.bind(categoryController));
categoryRouter.post('/create',categoryController.create.bind(categoryController));
categoryRouter.delete('/delete/:id',categoryController.delete.bind(categoryController));
categoryRouter.post('/update',categoryController.update.bind(categoryController));
categoryRouter.post('/search',categoryController.search.bind(categoryController));

export default categoryRouter;