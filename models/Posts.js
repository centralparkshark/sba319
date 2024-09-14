import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    body: { type: String, required: true},
    permalink: {type: String, required: true},
    author: {type: String, required: true},
    title: {type: String, required: true},
    tags: [String],
    comments: [
        {
            body: {type: String, required: true},
            email: {type: String, required: true},
            author: {type: String, required: true},
        }
    ],
    date: {type: Date, required: true},
})

const Posts = mongoose.model("Posts", postsSchema)

postsSchema.index({author: 1}, {title: 1}, {tags: 1}, {date: -1})
mongoose.set('autoIndex', false)

export default Posts;