import { Router } from 'express'
import Restaurant from '../models/Restaurant.js'

const router = Router();

router.get("/:zipcode", async (req, res) => {
    try {
        const {zipcode} = req.params;
        const results = await Restaurant.find(zipcode);
        res.status(200).json(results)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get("/", async (req, res) => {
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


export default router;