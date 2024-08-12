import { Router } from "express";
import ProductController from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", ProductController.getAll);

productRouter.get("/:id", ProductController.getById);

export default productRouter;
