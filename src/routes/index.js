import { Router } from "express";
import speedtestRoute from "./speedtest.route.js";


const router = Router()


router.use("/speedtest", speedtestRoute)

export default router