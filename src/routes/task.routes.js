const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const controller = require("../controllers/task.controller");

router.use(auth);

router.get("/", controller.getTasks); // both admin & user
router.get("/:id", controller.getTaskById);
router.post("/", controller.createTask);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

// Example admin-only route
router.get("/admin/all", role("admin"), controller.getTasks);

module.exports = router;
