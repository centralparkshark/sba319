import { Router } from 'express'
import Restaurant from '../models/Restaurant.js'

const router = Router();

router.get("/", async (req, res) => {
    // return those with avg score over 10 ?
    if (req.query.cuisine) {
        try {
            const cuisine = req.query.cuisine;
            const results = await Restaurant.find({cuisine: cuisine});
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


export default router;