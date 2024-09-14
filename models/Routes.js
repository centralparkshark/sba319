import mongoose from "mongoose";

const routesSchema = new mongoose.Schema({
    airline: { 
        id: {type: Number, required: true},
        name: {type: String, required: true},
        alias: {type: String, required: true},
        iata: {type: String, required: true},
    },
    src_airport: {type: String, required: true},
    dst_airport: {type: String, required: true},
    codeshare: {type: String, required: true},
    stops: {type: Number, required: true},
    airplane: {type: String, required: true},
})

const Routes = mongoose.model("Routes", routesSchema)

routesSchema.index({src_airport: 1}, {dst_airport: 1}, {airline: 1})
mongoose.set('autoIndex', false)

export default Routes;