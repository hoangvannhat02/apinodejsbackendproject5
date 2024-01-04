import { Router } from "express";
import { container, injectable } from "tsyringe";
import { CustomerController } from "../../controllers/user/customer.controller";
const customerRouter = Router();

const customerController = container.resolve(CustomerController);
customerRouter.get('/databyid/:id',customerController.getdatabyid.bind(customerController));
customerRouter.post('/create',customerController.create.bind(customerController));
customerRouter.post('/update',customerController.update.bind(customerController));
customerRouter.post('/login',customerController.login.bind(customerController));

export default customerRouter;