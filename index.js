import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()

import { getHealth } from "./controllers/health.js";
import { postPlant,getPlants, getPlantid, putPlantid, deletePlant } from "./controllers/plant.js";
import { handlePageNotFound } from "./controllers/errors.js";
const PORT = process.env.PORT
app.use(express.json())

//Health_end_point
app.get("/health", getHealth)
//Create_plant
app.post("/plant", postPlant)
//Read_all_plants
app.get("/plants",getPlants)
//Read_single_plant
app.get("/plant/:id", getPlantid)
//Update_plant
app.put("/plant/:id", putPlantid)
//Delete_plant
app.delete("/plant/:id", deletePlant)

app.use("*", handlePageNotFound)

app.listen(PORT , ()=> console.log(`Server is running on port :${PORT}`));