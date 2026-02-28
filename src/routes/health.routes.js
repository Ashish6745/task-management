import { Router } from "express";
import { healthCheck, healthCheckWithId } from "../controllers/health.controller.js";

const router = Router();

router.route("/").get(healthCheck);
router.route("/:id").get(healthCheckWithId);

export default router;