import mongoose from 'mongoose';

const solarsystemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },

}, 
{
    timestamps: true
});

const Solarsystem = mongoose.model('Solarsystem', solarsystemSchema);

export default Solarsystem;