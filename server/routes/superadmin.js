const app = require("express")();
const router = require("express").Router();
const verify = require("../middlewares/verify");
const verifySuperadmin = require("../middlewares/verifySuperadmin");

const superadminController = require("../controllers/superadmin");

// router.get("/admins", verify, superadminController.getAdmins)
router.post("/admin", verifySuperadmin, superadminController.addAdmin);

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

module.exports = router