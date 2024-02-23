import { Router } from "express";
import { getDownloadSpeed, getUploadSpeed } from "../controllers/speedtest.controller.js";

const router = Router()

router.get('/download', getDownloadSpeed)
router.get('/upload', getUploadSpeed)

export default router;