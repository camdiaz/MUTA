const { Material } = require('../models');

async function getAllMaterials() {
  try {
    const materials = await Material.findAll();
    return materials;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving materials.');
  }
}

async function getOneMaterial(materialId) {
  try {
    const material = await Material.findByPk(materialId);
    if (!material) {
      throw new Error('Material not found.');
    }
    return material;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving material details.');
  }
}

async function createMaterial(newMaterialData) {
  try {
    const createdMaterial = await Material.create(newMaterialData);
    return createdMaterial;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating material.');
  }
}

async function updateMaterial(materialId, updatedMaterialData) {
  try {
    const material = await Material.findByPk(materialId);
    if (!material) {
      throw new Error('Material not found.');
    }
    await material.update(updatedMaterialData);
    return material;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating material details.');
  }
}

async function deleteMaterial(materialId) {
  try {
    const material = await Material.findByPk(materialId);
    if (!material) {
      throw new Error('Material not found.');
    }
    await material.destroy();
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting material.');
  }
}

module.exports = {
  getAllMaterials,
  getOneMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};
