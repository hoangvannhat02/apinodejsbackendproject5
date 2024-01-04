import { Router } from "express";
import { container, injectable } from "tsyringe";
import { BillofsaleController } from "../../controllers/user/billofsale.controller";
const billofsaleRouter = Router();

const billofsaleController = container.resolve(BillofsaleController);
billofsaleRouter.get('/data',billofsaleController.get.bind(billofsaleController));
billofsaleRouter.get('/datanew',billofsaleController.getnew.bind(billofsaleController));
billofsaleRouter.get('/databyid/:id',billofsaleController.getdatabyid.bind(billofsaleController));
billofsaleRouter.post('/create',billofsaleController.create.bind(billofsaleController));
billofsaleRouter.delete('/delete/:id',billofsaleController.delete.bind(billofsaleController));

export default billofsaleRouter;