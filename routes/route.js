import { Router } from 'express'
import Routes from '../models/Routes.js';

const router = Router();

router.get("/airlines", async (req, res) => {
    try {
        const airlines = await Routes.distinct("airline.name");
        res.json(airlines)
    } catch (e) {
        res.status(500).send("Server Error")
    }
});

router.get("/", async (req, res) => {
    if (req.query.src && req.query.dst) {
        try {
            const src = req.query.src;
            const dst = req.query.dst;
            const results = await Routes.find({src_airport: src, dst_airport: dst}).limit(10);
            res.json(results)
        } catch (e) {
            res.status(500).send(`Error finding route`)
        }
    } else {
        try {
            const flights = await Routes.find({}).limit(20).select('airline.name src_airport dst_airport');
            res.json(flights).status(200);
        } catch (e) {
            res.json(e).status(400)
        }
    }
    
});


export default router;