import mongoose from "mongoose";
import Solarsystem from "../models/solarsystem.model.js"

export const getPlanet = async(req, res) => {
    try{
        const planets = await Solarsystem.find({});
        res.status(200).json({success:true, data:planets});
    }catch(error){
        console.error(error);
        res.status(400).json({success:false, message: 'No planets available'});
    }
};

export const postPlanet = async(req,res)=> {
    const product = req.body; // user will send data to server

    if(!product.name || !product.age || !product.image || !product.temperature || !product.distance){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Solarsystem(product); // Product is an object exported from product.model.js 

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }
    catch(error){
        console.error("Error in Create product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }

};

export const updatePlanet = async(req,res)=> {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"});
    }
    try{
        const updatedProduct = await Solarsystem.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data: updatedProduct})
    } catch(error){
        console.error(error);
        res.status(400).json({success:false, message: 'Product not found '});
    }
};

export const deletePlanet = async (req,res)=> {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"});
    }
    
    try{
        
    await Solarsystem.findByIdAndDelete(id);
    res.status(200).json({success:true, message: 'Product deleted'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({success:false, message: 'Server Error '});
    }
};