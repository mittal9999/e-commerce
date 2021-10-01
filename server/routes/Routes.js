import  express  from "express";

import { userRegister } from "../controller/user-controller";

const router = express.Router();

router.post('/Register',userRegister );




export default router;