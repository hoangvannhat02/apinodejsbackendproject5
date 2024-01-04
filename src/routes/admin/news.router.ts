import { Router } from "express";
import { container, injectable } from "tsyringe";
import { NewsController } from "../../controllers/admin/news.controller";
const newsRouter = Router();

const newsController = container.resolve(NewsController);
newsRouter.get('/data',newsController.get.bind(newsController));
newsRouter.get('/databyid/:id',newsController.getdatabyid.bind(newsController));
newsRouter.post('/create',newsController.create.bind(newsController));
newsRouter.delete('/delete/:id',newsController.delete.bind(newsController));
newsRouter.post('/uploadfile',newsController.uploadFile.bind(newsController));
newsRouter.delete('/deleteimg',newsController.deleteimg.bind(newsController));
newsRouter.post('/update',newsController.update.bind(newsController));
newsRouter.post('/search',newsController.search.bind(newsController));

export default newsRouter;