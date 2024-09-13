import { Router } from 'express'
import Restaurant from '../models/Restaurant.js'

const router = Router();

router.get("/cuisines", async (req, res) => {
    if (req.query.cuisine) {
        try {
            const cuisine = req.query.cuisine;
            const results = await Restaurant.find({cuisine: cuisine}).limit(10);
            res.json(results)
        } catch (e) {
            res.status(500).send("Server Error")
        }
    } else {
        try {
            const cuisines = await Restaurant.distinct("cuisine");
            res.json(cuisines)
        } catch (e) {
            res.status(500).send("Server Error")
        }
    }
    
});



router.get("/locations/:zipcode", async (req, res) => {
    try {
        const {zipcode} = req.params;
        const results = await Restaurant.find({"address.zipcode": zipcode}).limit(10);
        res.status(200).json(results)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get("/locations", async (req, res) => {
    if (req.query.borough) {
        try {
            const location = req.query.borough;
            const results = await Restaurant.find({borough: location});
            res.json(results)
        } catch (e) {
            res.status(500).send("Server Error")
        }
    } else {
        try {
            const locations = await Restaurant.distinct("borough");
            res.json(locations)
        } catch (e) {
            res.status(500).send("Server Error")
        }
    }
    
});

router.get("/", async (req, res) => {
    try {
        const rests = await Restaurant.find({}).limit(20);
        res.json(rests).status(200);
    } catch (e) {
        res.json(e).status(400)
    }
});





export default router;