import express from "express";
import { getPlanet, postPlanet, updatePlanet, deletePlanet } from "../controllers/solarsystem.controller.js";

const router = express.Router();

router.get('/', getPlanet);

router.post('/', postPlanet);

router.put('/:id', updatePlanet);

router.delete('/:id', deletePlanet);

export default router;