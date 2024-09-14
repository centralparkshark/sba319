import mongoose from "mongoose";

const zipsSchema = new mongoose.Schema({
    city: { type: String, required: true},
    zip: {type: String, required: true},
    loc: {
        x: {type: Number, required: true},
        y: {type: Number, required: true},
    },
    pop: {type: Number, required: true},
    state: {type: String, required: true},
})

const Zips = mongoose.model("Zips", zipsSchema)

zipsSchema.index({zip: 1}, {pop: 1}, {state: 1}, {city: 1})
mongoose.set('autoIndex', false)

export default Zips;