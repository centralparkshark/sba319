import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    address: {
        building: {type: String, required: true},
        coord: {type: [Number], required: true},
        street: {type: String, required: true},
        zipcode: {type: String, required: true},
    },
    borough: {type: String, required: true},
    cuisine: {type: String, required: true},
    grades: [
        {
            date: {type: Date, required: true},
            grade: {type: String, required: true},
            score: {type: Number, required: true},
        }
    ],
    name: {type: String, required: true},
    restaurant_id: {type: Number, required: true}
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

restaurantSchema.index({zipcode: 1})
restaurantSchema.index({borough: 1})
restaurantSchema.index({name: 1})
mongoose.set('autoIndex', false)

export default Restaurant;