import express from 'express'
import connectToDb from './db.js';
import postRoutes from './routes/post.js'
// import trainingRoutes from './routes/training.js'

const PORT = 3000;
const app = express()
app.use(express.json())

connectToDb();

app.use("/posts", postRoutes)
// app.use("/training", trainingRoutes)

app.get("/", async (req, res) => {
	try {
        res.send("try /posts").status(200);
    } catch (e) {
        res.json(e).status(400)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})