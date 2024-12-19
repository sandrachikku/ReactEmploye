import { Router } from "express";
import * as emp from "./requestHandler.js";
import Auth from "./middleware/Auth.js"
const router=Router();
router.route("/countemployees").get(emp.countEmployees);
router.route("/addemp").post(emp.addEmp);
router.route("/getemployees").get(Auth,emp.getEmployees);
router.route("/getemploy/:id").get(emp.getEmploy);
router.route("/editemploy/:_id").put(emp.editEmploy);
router.route("/deleteemploy/:_id").delete(emp.deleteEmploy);
router.route("/signup").post(emp.signUp);
router.route("/signin").post(emp.signIn);
router.route("/otp").post(emp.forgetPassword);
router.route("/otpcheck").post(emp.otpCheck);
router.route("/resetpassword").post(emp.resetpassword);


export default router;