import express from 'express'
import connectToDb from './db.js';
import restaurantRoutes from './routes/restaurant.js'

const PORT = 3000;
const app = express()
app.use(express.json())

connectToDb();

app.use("/restaurants", restaurantRoutes)

app.get("/", async (req, res) => {
	try {
        res.send("try /restaurants").status(200);
    } catch (e) {
        res.json(e).status(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})