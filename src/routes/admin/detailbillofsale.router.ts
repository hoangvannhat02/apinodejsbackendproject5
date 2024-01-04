import { Router } from "express";
import { container, injectable } from "tsyringe";
import { DetailBillofsaleController } from "../../controllers/admin/detailbillofsale.controller";
const detailbillofsaleRouter = Router();

const detailbillofsaleController = container.resolve(DetailBillofsaleController);
detailbillofsaleRouter.get('/datainfocustomerbyid/:id',detailbillofsaleController.getdatainfoproductsbyid.bind(detailbillofsaleController));
detailbillofsaleRouter.get('/datainfoproductbyid/:id',detailbillofsaleController.getdatainfoproductsbyid.bind(detailbillofsaleController));
detailbillofsaleRouter.post('/create',detailbillofsaleController.create.bind(detailbillofsaleController));
export default detailbillofsaleRouter;