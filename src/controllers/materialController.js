//HTTP Interaction 
const materialService = require('../services/materialService');

// Get all the materials
async function getAllMaterials(req, res) {
  try {
    const materials = await materialService.getAllMaterials();
    return res.status(200).json({message: "Materials:", materials});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Materials not found. Please try again.' });
  }
}

// Get a material
async function getMaterial(req, res) {
  try {
    const { id } = req.params;
    const material = await materialService.getMaterial(id);
    res.status(200).json({message: "Material by id:", material});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Material not found. Please try again.' });
  }
}

//Create a material
async function createMaterial(req, res) {
  try {
    const newMaterialData = req.body;
    const createdMaterial = await materialService.createMaterial(newMaterialData);
    res.status(201).json({message: "Material created:", createdMaterial});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Material not created. Please, try again.' });
  }
}

//Update a material
async function updateMaterial(req, res) {
  try {
    const { id } = req.params;
    const updatedMaterialData = req.body;
    const updatedMaterial = await materialService.updateMaterial(id, updatedMaterialData);
    res.status(200).json({message: "Material updated:", updatedMaterial});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Material not updated. Please, try again.' });
  }
}

//Delete a material
async function deleteMaterial(req, res) {
  try {
    const { id } = req.params;
    await materialService.deleteMaterial(id);
    res.status(200).json({ error: 'Material deleted:', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Material not deleted. Please try again.' });
  }
}

module.exports = {
  getAllMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};
