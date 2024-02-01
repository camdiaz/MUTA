//HTTP Interaction 
const materialService = require('../services/materialsService');

// Get all the materials
async function getAllMaterials(req, res) {
  try {
    const materials = await materialService.getAllMaterials();
    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Get a material
async function getMaterial(req, res) {
  const { materialId } = req.params;
  try {
    const material = await materialService.getMaterial(materialId);
    res.status(200).json(material);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Create a material
async function createMaterial(req, res) {
  const newMaterialData = req.body;
  try {
    const createdMaterial = await materialService.createMaterial(newMaterialData);
    res.status(201).json(createdMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Update a material
async function updateMaterial(req, res) {
  const { materialId } = req.params;
  const updatedMaterialData = req.body;
  try {
    const updatedMaterial = await materialService.updateMaterial(materialId, updatedMaterialData);
    res.status(200).json(updatedMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Delete a material
async function deleteMaterial(req, res) {
  const { materialId } = req.params;
  try {
    await materialService.deleteMaterial(materialId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};
