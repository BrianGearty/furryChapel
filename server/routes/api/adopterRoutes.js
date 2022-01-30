const router = require("express").Router();
const { Adopter, Animal } = require("../../models/");

// post new adopter info into DB
router.post("/", (req, res) => {
    const { adopter_name, phone_number, adopter_address, animal_id } = req.body;

    const newAdopter = {
        adopter_name,
        phone_number,
        adopter_address,
        animal_id
    }

    Adopter.create(newAdopter)
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));

    Animal.update(newAdopter, {
        where: {
            id: animal_id,
        },
    })
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));


})



module.exports = router;