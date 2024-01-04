import { Router } from "express";
import productRouter from "./product.router";
import categoryRouter from "./categoryproduct.router";
import customerRouter from "./customer.router";
import voucherRouter from "./voucher.router";
import detailbillofsaleRouter from "./detailbillofsale.router";
import billofsaleRouter from "./billofsale.router";
const router = Router();

router.use('/categoryproduct',categoryRouter);
router.use('/product',productRouter);
router.use("/customer",customerRouter);
router.use("/voucher",voucherRouter);
router.use("/billofsale",billofsaleRouter);
router.use("/detailbillofsale",detailbillofsaleRouter);
export default router;