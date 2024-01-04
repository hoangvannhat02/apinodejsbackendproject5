import { Router } from "express";
import { container, injectable } from "tsyringe";
import { BillofsaleController } from "../../controllers/admin/billofsale.controller";
const billofsaleRouter = Router();

const billofsaleController = container.resolve(BillofsaleController);
billofsaleRouter.get('/data',billofsaleController.get.bind(billofsaleController));
billofsaleRouter.get('/databyid/:id',billofsaleController.getdatabyid.bind(billofsaleController));
billofsaleRouter.post('/create',billofsaleController.create.bind(billofsaleController));
billofsaleRouter.delete('/delete/:id',billofsaleController.delete.bind(billofsaleController));
billofsaleRouter.post('/update',billofsaleController.update.bind(billofsaleController));
billofsaleRouter.post('/search',billofsaleController.search.bind(billofsaleController));

export default billofsaleRouter;