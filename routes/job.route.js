import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob , deleteJob} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/admin/jobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(  getJobById); // remove authntication
router.route("/delete/:id").delete(deleteJob);


export default router;

