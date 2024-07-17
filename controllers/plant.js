//temporary_plant_data
const plants = [
    {
        "id" : 101,
        "name": "Guava",
        "category": "Outdoor",
        "image": "https://m.media-amazon.com/images/I/61Xjo1OqD2L._SX300_SY300_QL70_FMwebp_.jpg",
        "price": 450,
        "description": "Guava Kg Guava - Fruit Plants & Tree"
    },
    {
        "id": 102,
        "name": "mango",
        "category": "Outdoor",
        "image": "https://th.bing.com/th/id/OIP.bP2fhrm57uJwtd09Lcm2KwHaHa?rs=1&pid=ImgDetMain",
        "price": 850,
        "description": "MangoTree"
    },
    {
        "id": 103,
        "name": "mango",
        "category": "Outdoor",
        "image": "https://th.bing.com/th/id/OIP.bP2fhrm57uJwtd09Lcm2KwHaHa?rs=1&pid=ImgDetMain",
        "price": 850,
        "description": "MangoTree"
    }
]

const postPlant = (req,res)=>{
    const {name, category, image, price, description} = req.body

    if(!name){
        return res.json({
            success : false,
            data : null,
            message : "Required Name...."
        })
    }
    if(!category){
        return res.json({
            success : false,
            data : null,
            message : "Required Category...."
        })
    }
    if(!image){
        return res.json({
            success : false,
            data : null,
            message : "Required Image...."
        })
    }
    if(!price){
        return res.json({
            success : false,
            data : null,
            message : "Required Price...."
        })
    }
    if(!description){
        return res.json({
            success : false,
            data : null,
            message : "Required Description...."
        })
    }

    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id : randomId,
        name : name,
        category : category,
        image : image, 
        price : price,
        description : description
    }
    plants.push(newPlant)

    res.json({
        success : true,
        data : newPlant,
        message : "New Plant added successfully"
    })
}

const getPlants = (req,res)=>{

    res.json({
        success : true,
        data : plants,
        message : "Plants data fetched successfully"
    })
}

const getPlantid = (req,res)=>{
    const {id} = req.params

    const plant = plants.find((p)=>p.id == id)
    res.json({
        success : plant ? true : false,
        data : plant || null,
        message : plant ? "plant fetched successfully" : "Plant not found"
    })
}

const putPlantid = (req,res)=>{
    const {name, category, image, price, description} = req.body

    const {id} = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    const newObj = {
        id ,
        name,
        category,
        image,
        price,
        description
    }

    if(index == -1){
        return res.json({
            success :  false,
            data : null,
            message : `plant not found ${id}` 
        })
    }
    else{
        plants[index] = newObj

        return res.json({
            success :  true,
            data : newObj,
            message : "Plant Updated Successfully"
        })
    } 
}

const deletePlant = (req,res)=>{
    const {id} = req.params
    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    if(index == -1){
        return  res.json({
            success :  false,
            message : `Plant not found with id ${id}`
        })
    }
    
    plants.splice(index, 1)

    res.json({
        success :  true,
        data : null,
        message : "Plant Deleted Successfully"
    })
}
export {postPlant, getPlants, getPlantid, putPlantid, deletePlant}