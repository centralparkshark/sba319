import express from 'express'
import connectToDb from './db.js';
import Restaurant from './models/Restaurant.js';
import cuisineRoutes from './routes/cuisine.js'
import locationRoutes from './routes/location.js'

const PORT = 3000;
const app = express()
app.use(express.json())

connectToDb();

app.use("/cuisines", cuisineRoutes)
app.use("/locations", locationRoutes)

app.get("/", async (req, res) => {
	try {
        const rests = await Restaurant.find({}).limit(10);
        res.json(rests).status(200);
    } catch (e) {
        res.json(e).status(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})