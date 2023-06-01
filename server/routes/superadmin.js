const app = require("express")();
const router = require("express").Router();
const verify = require("../middlewares/verify");

const superadminController = require("../controllers/superadmin");

// router.get("/admins", verify, superadminController.getAdmins)
router.post("/admin", verify, superadminController.addAdmin);

router.put("/admin/:adminId", verify, superadminController.updateAdmin);
// router.delete("/admin/:adminId", verify, superadminController.deleteAdmin)

router.get("/users", verify, adminController.getUsers);
router.get("/users/:userId", verify, adminController.getUser);

router.put("/users/:userId", verify, adminController.updateUser);

router.delete("/users/:userId", verify, adminController.deleteUser);
