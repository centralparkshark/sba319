import { Router } from 'express'
import Posts from '../models/Posts.js';

const router = Router();

router.get("/tags", async (req, res) => {
    if (req.query.tag) {
        try {
            const tag = req.query.tag;
            const results = await Posts.find({tags: tag}).limit(10);
            res.json(results)
        } catch (e) {
            res.status(500).send(`Error finding ${req.query.tag}`)
        }
    } else {
        try {
            const tags = await Posts.distinct("tags");
            res.json(tags)
        } catch (e) {
            res.status(500).send("Server Error")
        }
    }
    
});

router.get("/authors/:authorName", async (req, res) => {
    try {
        const {authorName} = req.params;
        const results = await Posts.find({author: authorName}).limit(10);
        res.json(results)
    } catch (e) {
        res.status(500).send("Server Error")
    }
});

router.get("/authors", async (req, res) => {
    try {
        const authors = await Posts.distinct("author");
        res.json(authors)
    } catch (e) {
        res.status(500).send("Server Error")
    }
});

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const posts = await Posts.find({_id: id});
        res.json(posts).status(200);
    } catch (e) {
        res.json(e).status(400)
    }
});

router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find({}).limit(20).select('title author date body');
        res.json(posts).status(200);
    } catch (e) {
        res.json(e).status(400)
    }
});

router.post("/", async (req,res) => {
    try {
        const {body, author, title, tags} = req.body;

        const newPost = new Post ({
            body,
            permalink: "rAndoMcHarACtErs",
            author,
            title,
            tags,
            date: new Date,
        })
 
        const savedPost = await newPost.save()
        res.status(201).json(savedPost)
    } catch (error) {
        res.status(400).json({ message: "Error creating post", error: error.message });
    }
})


export default router;