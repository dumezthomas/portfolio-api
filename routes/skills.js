const express = require("express");
const router = express.Router();

const { checkJwt, checkRole } = require("../controllers/auth");
const { getAll, getById, create, update, deleteById } = require("../controllers/skills");

router.get("", getAll);
router.get("/:id", getById);

router.post("", checkJwt, checkRole("admin"), create);

router.patch("/:id", checkJwt, checkRole("admin"), update);

router.delete("/:id", checkJwt, checkRole("admin"), deleteById);

module.exports = router;
