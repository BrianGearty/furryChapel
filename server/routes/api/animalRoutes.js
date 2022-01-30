const router = require('express').Router();
const { Animal, Category, Adopter} = require("../../models")


// register animal into shelter / DB
router.post("/", (req, res)=>{
console.log("Animal into DB", req.body)

    Animal.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
})


// get all animals to display in shelterAnimals.js
router.get("/", (req, res) => {
    console.log("HIT ANIMAL GET")
    Animal.findAll({
        include: [{ model: Adopter }],
        // raw: true
    })
    .then((adopterInfo) => {
        res.json(adopterInfo)
    })
    .catch((err) => { 
        res.status(500).json(err)
    });

});

// get all Not Adopted animals to display in registerAdopter form
router.get("/adopt", (req, res) => {

    Animal.findAll({
        where: {
            adopt_status: "Not Adopted"
        }
    })
    .then((adopterInfo) => {
        res.json(adopterInfo)
    })
    .catch((err) => res.status(500).json(err));
    
});


// update animal info in DB
router.put("/:id", (req, res)=>{
    console.log("ANIMAL WERE UPDATING", req.body)
    
        Animal.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((category) => res.status(200).json(category))
        .catch((err) => {
            res.status(400).json(err)
            console.log("UPDATE ERROR", err)
        });

})

// update animal info in DB
router.delete("/:id", (req, res)=>{
    console.log("ANIMAL WERE Deleting", req.body)
    
        Animal.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((category) => res.status(200).json(category))
        .catch((err) => {
            res.status(400).json(err)
        });

})

module.exports = router;