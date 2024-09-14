import { Router } from 'express'
//import Restaurant from '../models/Restaurant.js'

const router = Router();

router.get("/", async (req, res) => {
    try {
        //const rests = await Restaurant.find({}).limit(20);
        res.send("these are companies").status(200);
    } catch (e) {
        res.json(e).status(400)
    }
});





export default router;