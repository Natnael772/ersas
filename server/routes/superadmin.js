const app = require("express")();
const router = require("express").Router();
const verify = require("../middlewares/verify");
const verifySuperadmin = require("../middlewares/verifySuperadmin");

const superadminController = require("../controllers/superadmin");

router.post("/admin", superadminController.addAdmin);

router.get("/admins", superadminController.getAdmins);
router.get("/admin/:adminId", superadminController.getAdmin);

router.put(
  "/admin/:adminId",
  verifySuperadmin,
  superadminController.updateAdmin
);
// router.delete("/admin/:adminId", verify, superadminController.deleteAdmin)

router.get("/users", superadminController.getUsers);
router.get("/users/:userId", superadminController.getUser);

router.put("/users/:userId", superadminController.updateUser);

router.delete("/users/:userId", superadminController.deleteUser);

module.exports = router;
