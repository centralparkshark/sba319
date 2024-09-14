import { Router } from 'express'
import Zips from '../models/Zips.js';

const router = Router();

router.get("/:zip", async (req, res) => {
    try {
        const {zip} = req.params;
        const results = await Zips.find({zip: zip});
        res.json(results)
    } catch (e) {
        res.status(500).send("Server Error")
    }
});

router.get("/", async (req, res) => {
    if (req.query.state) {
        try {
            const state = req.query.state;
            const results = await Zips.find({state: state}).limit(10);
            res.json(results)
        } catch (e) {
            res.status(500).send(`Error finding ${req.query.state}`)
        }
    } else {
        try {
            const zips = await Zips.find({}).limit(20).select('zip city state');
            res.json(zips).status(200);
        } catch (e) {
            res.json(e).status(400)
        }
    }
});


export default router;