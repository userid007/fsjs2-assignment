import { Router } from "express";
import blogpostRoutes from "./blogpost.route.js";
const router = Router();

router.use("/blogpost", blogpostRoutes);
export default router;
