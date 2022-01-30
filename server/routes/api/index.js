const router = require("express").Router();
const adopterRoutes = require("./adopterRoutes")
const animalRoutes = require("./animalRoutes")

router.use("/adopter", adopterRoutes)
router.use("/animal", animalRoutes)

module.exports = router;