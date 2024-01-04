import { Router } from "express";
import { container, injectable } from "tsyringe";
import { UserController } from "../../controllers/admin/user.controller";
const userRouter = Router();

const userController = container.resolve(UserController);
userRouter.get('/data',userController.get.bind(userController));
userRouter.get('/databyid/:id',userController.getdatabyid.bind(userController));
userRouter.post('/create',userController.create.bind(userController));
userRouter.delete('/delete/:id',userController.delete.bind(userController));
userRouter.post('/update',userController.update.bind(userController));
userRouter.post('/login',userController.login.bind(userController));
userRouter.post('/checkemailuser',userController.checkemailuser.bind(userController));
userRouter.post('/search',userController.search.bind(userController));
userRouter.post('/uploadfile',userController.uploadFile.bind(userController));
userRouter.delete('/deleteimg',userController.deleteimg.bind(userController));

export default userRouter;